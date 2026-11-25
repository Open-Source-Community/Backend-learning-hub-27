import { Request, Response } from "express";

export const register = async (req: Request, res: Response): Promise<Response> => {
  // TODO: read name, email, password from req.body
  // TODO: missing fields -> 400
  // TODO: email already exists -> 400
  // TODO: hash password with bcrypt (10 rounds)
  // TODO: User.create(...)
  // TODO: 201 { message: "User registered successfully" }
  // TODO: wrap in try/catch -> 500
  throw new Error("Not implemented");
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  // TODO: read email, password from req.body
  // TODO: find user by email; not found -> 401 "Invalid credentials"
  // TODO: bcrypt.compare; mismatch -> 401 "Invalid credentials"
  // TODO: generateToken({ id, email, role })
  // TODO: 200 { token }
  // TODO: wrap in try/catch -> 500
  throw new Error("Not implemented");
};
