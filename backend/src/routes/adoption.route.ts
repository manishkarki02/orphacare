import { Router } from "express";
import * as adoptionController from "@/controllers/adoption.controller";
import { accessTokenValidator } from "@/middlewares/token.middleware";
import { validationMiddleware } from "@/middlewares/validator.middleware";
import {
  adoptionRequestIdSchema,
  createAdoptionRequestSchema,
  fetchAdoptionRequestsSchema,
  updateAdoptionRequestSchema,
} from "@/validations/adoption.schema";

const router = Router();

router.post(
  "/",
  accessTokenValidator,
  validationMiddleware(createAdoptionRequestSchema),
  adoptionController.createAdoptionKid
);

router.get(
  "/",
  accessTokenValidator,
  validationMiddleware(fetchAdoptionRequestsSchema),
  adoptionController.fetchAllKids
);

router.get(
  "/:id",
  accessTokenValidator,
  validationMiddleware(adoptionRequestIdSchema),
  adoptionController.fetchAdoptionKidDetails
);

router.post(
  "/",
  accessTokenValidator,
  validationMiddleware(updateAdoptionRequestSchema),
  adoptionController.updateAdoptionKid
);

router.delete(
  "/:id",
  accessTokenValidator,
  validationMiddleware(adoptionRequestIdSchema),
  adoptionController.deleteAdoptionKid
);

router.post(
  "/request/:id",
  accessTokenValidator,
  validationMiddleware(adoptionRequestIdSchema),
  adoptionController.requestForAdoption
);

export default router;