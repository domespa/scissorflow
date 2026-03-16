import "dotenv/config";
import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

// CREAZIONE ADAPTER PER PGADMIN
const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

// SINGLETON PER TUTTA L'APP
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
