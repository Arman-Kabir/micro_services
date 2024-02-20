import { Router } from "express";
import authRoutes from "./AuthRoutes.js";
import userRoutes from "./UserRoutes.js";

const router = Router();

router.use("/api",authRoutes);
router.use("/api",userRoutes);


export default router;