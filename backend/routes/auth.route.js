import express from "express";
import { login, register, checkAuth } from "../controllers/index.js";
import { protect } from "../middleware/index.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.post("/check-auth", protect, checkAuth);

export { authRoutes };
