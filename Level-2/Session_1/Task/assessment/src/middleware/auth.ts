import { Request, Response, NextFunction } from "express";
import { TokenPayload } from "../utils/token";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // TODO: read "Authorization: Bearer <token>" header
  // TODO: no header -> 401 { message: "No token provided" }
  // TODO: verify the token; invalid/expired -> 401
  // TODO: attach decoded payload to req.user, then next()
  throw new Error("Not implemented");
};

// BONUS
export const requireRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // TODO: if req.user.role !== role -> 403 { message: "Forbidden" }
    // TODO: otherwise next()
    throw new Error("Not implemented");
  };
};
