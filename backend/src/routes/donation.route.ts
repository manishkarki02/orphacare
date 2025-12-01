import { Router } from "express";
import * as donationController from "@/controllers/donation.controller";
import { validationMiddleware } from "@/middlewares/validator.middleware";
import {
  createDonationRequestSchema,
  getDonationRequestSchema,
  updateDonationRequestSchema,
} from "@/validations/donations.schema";
import { accessTokenValidator } from "@/middlewares/token.middleware";

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
