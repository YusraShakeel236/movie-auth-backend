import express from "express";
import { register, login, getProfile } from "../controllers/user.controller";
import { authenticate } from "../middleware";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route (requires JWT token)
router.get("/profile", authenticate, getProfile);

export default router;


