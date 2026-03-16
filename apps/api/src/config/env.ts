import { z } from "zod";
import dotenv from "dotenv";

// CARICHIAMO IL FILE ENV
dotenv.config();

// VALIDAZIONI DELLO SCHEMA CON ZOD
const envSchema = z.object({
  // SERVER
  PORT: z.string().default("3000"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // DB
  DATABASE_URL: z.string({
    error: "DATABASE_URL è obbligatoria",
  }),

  // JWT
  JWT_SECRET: z
    .string({ error: "JWT_SECRET è obbligatoria" })
    .min(32, "JWT_SECRET deve essere lunga almeno 32 caratteri"),

  // EMAIL
  SMTP_HOST: z.string({ error: "SMTP_HOST è obbligatoria" }),
  SMTP_PORT: z.string().default("587"),
  SMTP_USER: z.string({ error: "SMTP_USER è obbligatoria" }),
  SMTP_PASS: z.string({ error: "SMTP_PASS è obbligatoria" }),
  EMAIL_FROM: z.string({ error: "EMAIL_FROM è obbligatoria" }),

  // FRONTEND
  CLIENT_URL: z.string().default("http://localhost:5173"),
});

// VALIDAZIONE VARIABILI
const parsed = envSchema.safeParse(process.env);

// SE MANCA QUALCOSA BLOCCA TUTTO
if (!parsed.success) {
  console.error("❗Variabili mancanti o sbagliate:");
  console.error(parsed.error.issues);
  process.exit(1);
}

// ESPORTIAMO
export const env = parsed.data;
