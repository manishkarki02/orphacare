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
import { upload } from "@/config/multer.config";

const router = Router();

router.post(
  "/",
  accessTokenValidator,
  upload.single("image"),
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

router.patch(
  "/",
  accessTokenValidator,
  upload.single("image"),
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
