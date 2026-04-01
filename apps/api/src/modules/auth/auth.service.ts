import type { RegisterInput, LoginInput, OnboardingInput } from "./auth.schema";
import { env } from "@/config/env";
import { prisma } from "@/config/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "7d" });
};

export const authService = {
  // =========================================
  //              REGISTRAZIONE
  // =========================================
  async register(input: RegisterInput) {
    const existing = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (existing) throw new Error("EMAIL_ALREADY_EXISTS");

    const hashedPass = await bcrypt.hash(input.password, 12);

    const user = await prisma.user.create({
      data: {
        email: input.email,
        password: hashedPass,
        firstName: input.firstName,
        lastName: input.lastName,
      },
    });

    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt.toISOString(),
        shopId: null,
      },
      token,
    };
  },

  // =========================================
  //                LOGIN
  // =========================================
  async login(input: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
      include: {
        shops: {
          where: { role: "OWNER" },
          select: { shopId: true, shop: { select: { slug: true } } },
          take: 1,
        },
      },
    });
    if (!user) throw new Error("INVALID_CREDENTIALS");

    const isValid = await bcrypt.compare(input.password, user.password);
    if (!isValid) throw new Error("INVALID_CREDENTIALS");

    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt.toISOString(),
        shopId: user.shops[0]?.shopId ?? null,
        slug: user.shops[0]?.shop?.slug ?? null,
      },
      token,
    };
  },

  // =========================================
  //                ONBOARDING
  // =========================================
  async onboarding(userId: string, input: OnboardingInput) {
    const slug = input.shopSlug ?? generateSlug(input.shopName);

    const existingSlug = await prisma.shop.findUnique({ where: { slug } });
    if (existingSlug) throw new Error("SLUG_ALREADY_EXISTS");

    const slotInterval =
      input.services && input.services.length > 0
        ? input.services[0].duration
        : 30;

    const shop = await prisma.$transaction(async (tx) => {
      const newShop = await tx.shop.create({
        data: {
          name: input.shopName,
          slug,
          users: {
            create: { userId, role: "OWNER" },
          },
          config: {
            create: {
              primaryColor: input.config.primaryColor,
              coverImage: input.config.coverImage ?? null,
              tagline: input.config.tagline ?? null,
              showPrices: input.config.showPrices,
              slotMode: "FIXED",
              slotInterval,
              logoStyle: input.config.logoStyle ?? "badge-vintage",
              legalMode: input.config.legalMode ?? "generated",
            },
          },
        },
        include: { config: true },
      });

      // AVAILABILITY DOM E LUNE CHIUSI
      const availabilityData =
        input.availability ??
        [0, 1, 2, 3, 4, 5, 6].map((day) => ({
          dayOfWeek: day,
          startTime: "09:00",
          endTime: "18:00",
          breakStart: "13:00",
          breakEnd: "14:00",
          isActive: day !== 0 && day !== 1,
        }));

      await tx.availability.createMany({
        data: availabilityData.map((a) => ({
          shopId: newShop.id,
          dayOfWeek: a.dayOfWeek,
          startTime: a.startTime,
          endTime: a.endTime,
          breakStart: a.breakStart ?? null,
          breakEnd: a.breakEnd ?? null,
          isActive: a.isActive,
        })),
      });

      // SERVIZI
      if (input.services && input.services.length > 0) {
        await tx.service.createMany({
          data: input.services.map((s) => ({
            shopId: newShop.id,
            name: s.name,
            duration: s.duration,
            price: s.price ?? null,
            isActive: true,
          })),
        });
      }

      return newShop;
    });

    return shop;
  },
};
