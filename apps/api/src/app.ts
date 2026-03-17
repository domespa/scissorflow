import express from "express";
import cors from "cors";
import { env } from "./config/env";
import authRouter from "./modules/auth/auth.routes";

// INIZIALIZIAMO L'APP
const app = express();

// ========================================
//               MIDDLEWARE
//========================================
// CORS
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);

// PARSING JSON
app.use(express.json());

// PARSING URL
app.use(express.urlencoded({ extended: true }));
// ========================================

// ========================================
//                 ROTTE
// ========================================
// AUTH
app.use("/api/auth", authRouter);

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "🟢 ScissorFlow BE connesso",
    enviroment: env.NODE_ENV,
  });
});
// ========================================
export default app;
