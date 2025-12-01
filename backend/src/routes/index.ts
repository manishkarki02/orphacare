import { Router } from "express";
import authRoutes from "./auth.route";
import reportRoutes from "./reports.route";
import donationRoutes from "./donation.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/reports", reportRoutes);
router.use("/donations", donationRoutes);

export default router;
