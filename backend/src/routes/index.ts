import { Router } from "express";
import authRoutes from "./auth.route";
import reportRoutes from "./reports.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/reports", reportRoutes);

export default router;
