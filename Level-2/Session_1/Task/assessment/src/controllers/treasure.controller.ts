import { Request, Response } from "express";

export const getAllTreasures = async (req: Request, res: Response): Promise<Response> => {
  // TODO: read optional req.query.category
  // TODO: build filter; Treasure.find(filter)
  // TODO: 200 { message, treasures }
  throw new Error("Not implemented");
};

export const createTreasure = async (req: Request, res: Response): Promise<Response> => {
  // TODO: read name, category, value, description from req.body
  // TODO: Treasure.create(...)
  // TODO: 201 { message, treasure }
  // TODO: wrap in try/catch -> 500
  throw new Error("Not implemented");
};

// BONUS
export const getTreasureById = async (req: Request, res: Response): Promise<Response> => {
  // TODO: read req.params.id, Treasure.findById
  // TODO: not found -> 404
  // TODO: 200 { treasure }
  throw new Error("Not implemented");
};
