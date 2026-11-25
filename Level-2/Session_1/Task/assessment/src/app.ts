import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import { logger } from "./middleware/logger";
import authRouter from "./routes/auth.routes";
import treasureRouter from "./routes/treasure.routes";

const app: Application = express();

// TODO: register express.json()
// TODO: register logger middleware
// TODO: GET /health  -> 200 { status: "ok" }
// TODO: mount authRouter on "/auth"
// TODO: mount treasureRouter on "/treasures"
// TODO: mount swagger UI on "/api-docs"

export default app;
