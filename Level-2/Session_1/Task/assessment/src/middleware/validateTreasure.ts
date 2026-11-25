import { Request, Response, NextFunction } from "express";

export const validateTreasure = (req: Request, res: Response, next: NextFunction): void => {
  // TODO: check name (string), category (string), value (number) exist and have the right types
  // TODO: if invalid -> 400 { message: "Invalid treasure data" }
  // TODO: otherwise next()
  throw new Error("Not implemented");
};
