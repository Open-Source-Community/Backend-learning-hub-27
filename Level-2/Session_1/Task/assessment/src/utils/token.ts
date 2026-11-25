import jsonwebtoken from "jsonwebtoken";

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export const generateToken = (payload: TokenPayload): string => {
  // TODO: jwt.sign with process.env.JWT_SECRET, expiresIn "1h"
  throw new Error("Not implemented");
};

export const verifyToken = (token: string): TokenPayload => {
  // TODO: jwt.verify with process.env.JWT_SECRET
  // TODO: throw if invalid/expired
  throw new Error("Not implemented");
};
