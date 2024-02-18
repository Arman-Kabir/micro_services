import { Router } from "express";
import authRoutes from "./AuthRoutes.js";

const router = Router();

router.use("/api",authRoutes);


export default router;