import { Router } from "express";
import * as donationController from "@/features/donation/donation.controller";
import { validationMiddleware } from "@/common/middlewares/validator.middleware";
import {
  createDonationRequestSchema,
  getDonationRequestSchema,
  updateDonationRequestSchema,
} from "@/features/donation/donations.schema";
import { accessTokenValidator } from "@/common/middlewares/token.middleware";

const router = Router();

router.post(
  "/",
  accessTokenValidator,
  validationMiddleware(createDonationRequestSchema),
  donationController.createDonation
);

router.get("/", accessTokenValidator, donationController.fetchAllDonations);

router.get("/me", accessTokenValidator, donationController.fetchMyDonations);

router.get(
  "/:id",
  accessTokenValidator,
  validationMiddleware(getDonationRequestSchema),
  donationController.fetchDonationDetails
);

router.post(
  "/:id",
  accessTokenValidator,
  validationMiddleware(updateDonationRequestSchema),
  donationController.updateDonation
);
router.delete(
  "/:id",
  accessTokenValidator,
  validationMiddleware(getDonationRequestSchema),
  donationController.deleteDonation
);

export default router;
