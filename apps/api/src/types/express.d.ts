import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
      shopUser?: {
        id: string;
        userId: string;
        shopId: string;
        role: "OWNER" | "COLLABORATOR";
      };
    }
  }
}
