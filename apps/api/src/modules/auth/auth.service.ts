import type { RegisterInput, LoginInput, OnboardingInput } from "./auth.schema";
import { env } from "@/config/env";
import { prisma } from "@/config/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// GENERA SLUG AUTOMATICO DAL NOME DELLO SHOP
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // RIMOZIONE CARATTERI SPECIALI
    .replace(/\s+/g, "-") // SPAZI CON TRATTIZINI
    .replace(/-+/g, "-"); // RIMOZIONE TRATTINI DOPPI
};

// GENERA JWT TOKEN
const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "7d" });
};

export const authService = {
  // =========================================
  //              REGISTRAZIONE
  // =========================================
  async register(input: RegisterInput) {
    // CONTROLLO EMAIL SE ESISTE
    const existing = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (existing) {
      throw new Error("EMAIL_ALREADY_EXISTS");
    }

    // HASH PASS
    const hashedPass = await bcrypt.hash(input.password, 12);

    // CREAZIONE UTENTE
    const user = await prisma.user.create({
      data: {
        email: input.email,
        password: hashedPass,
        firstName: input.firstName,
        lastName: input.lastName,
      },
    });

    // GENERA TOKEN
    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt.toISOString(),
      },
      token,
    };
  },
  // =========================================

  // =========================================
  //                LOGIN
  // =========================================
  async login(input: LoginInput) {
    // CERCA UTENTE PER EMAIL
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (!user) {
      throw new Error("INVALID_CREDENTIALS");
    }

    // CHECK PASS
    const isValid = await bcrypt.compare(input.password, user.password);
    if (!isValid) {
      throw new Error("INVALID_CREDENTIALS");
    }

    // GENERAZIONE TOKEN
    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt.toISOString(),
      },
      token,
    };
  },
  // =========================================

  // =========================================
  //                ONBOARDING
  // =========================================
  async onboarding(userId: string, input: OnboardingInput) {
    // SLUG AUTOMATICO SE NON INSERITO
    const slug = input.shopSlug ?? generateSlug(input.shopName);

    // CHECK SE SLUG ERSISTE GIA
    const existingSlug = await prisma.shop.findUnique({
      where: { slug },
    });
    if (existingSlug) {
      throw new Error("SLUG_ALREADY_EXISTS");
    }

    // CREO SHOP E SETUP TUTTO INSIEME
    const shop = await prisma.$transaction(async (tx) => {
      const newShop = await tx.shop.create({
        data: {
          name: input.shopName,
          slug,
          // UTENTE OWNER DI DEFAULT
          users: {
            create: {
              userId,
              role: "OWNER",
            },
          },
          // CONFIG
          config: {
            create: {
              primaryColor: input.config.primaryColor,
              coverImage: input.config.coverImage,
              logo: input.config.logo,
              tagline: input.config.tagline,
              showPrices: input.config.showPrices,
            },
          },
        },
        include: {
          config: true,
        },
      });
      return newShop;
    });
    return shop;
  },
  // =========================================
};
