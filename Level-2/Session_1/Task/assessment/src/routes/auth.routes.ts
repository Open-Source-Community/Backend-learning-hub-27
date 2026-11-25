import { Router } from "express";
import { register, login } from "../controllers/auth.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     // TODO: complete parameters, requestBody, responses
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login and receive a JWT
 *     // TODO: complete parameters, requestBody, responses
 */
router.post("/login", login);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       // TODO: define properties (name, email, password, role)
 */

export default router;
