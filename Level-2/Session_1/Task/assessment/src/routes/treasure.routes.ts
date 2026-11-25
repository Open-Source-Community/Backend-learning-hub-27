import { Router } from "express";
import { getAllTreasures, createTreasure, getTreasureById } from "../controllers/treasure.controller";
import { authMiddleware } from "../middleware/auth";
import { validateTreasure } from "../middleware/validateTreasure";

const router = Router();

router.get("/", getAllTreasures);
router.post("/", authMiddleware, validateTreasure, createTreasure);
router.get("/:id", getTreasureById);


export default router;
