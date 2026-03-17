import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "@/config/env";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // PRENDIAMO IL TOKEN DALL'HEADER
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Token mancante" });
    return;
  }

  const token = authHeader?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Token mancante" });
    return;
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as unknown as {
      userId: string;
    };
    req.user = { userId: decoded.userId };
    next();
  } catch {
    res.status(401).json({ message: "Token non valido o scaduto" });
  }
};
