import { Router } from "express";
import authRoutes from "./auth.route";
import reportRoutes from "./reports.route";
import donationRoutes from "./donation.route";
import adoptionRoutes from "./adoption.route";
import volunteerRoutes from "./volunteer.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/reports", reportRoutes);
router.use("/donations", donationRoutes);
router.use("/adoptions", adoptionRoutes);
router.use("/volunteers", volunteerRoutes);

export default router;
