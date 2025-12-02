import * as volunteerController from "@/controllers/volunteer.controller";
import { Router } from "express";
import { validationMiddleware } from "@/middlewares/validator.middleware";
import { accessTokenValidator } from "@/middlewares/token.middleware";
import { create } from "domain";
import {
  createVolunteerRequestSchema,
  updateVolunteerRequestSchema,
  volunteerRequestIdSchema,
} from "@/validations/volunteer.schema";

const router = Router();

router.post(
  "/",
  accessTokenValidator,
  validationMiddleware(createVolunteerRequestSchema),
  volunteerController.createVolunteer
);

router.get("/", accessTokenValidator, volunteerController.fetchAllVolunteers);

router.get(
  "/:id",
  accessTokenValidator,
  validationMiddleware(volunteerRequestIdSchema),
  volunteerController.fetchVolunteerDetail
);

router.post(
  "/:id",
  accessTokenValidator,
  validationMiddleware(updateVolunteerRequestSchema),
  volunteerController.updateVolunteer
);
router.delete(
  "/:id",
  accessTokenValidator,
  validationMiddleware(volunteerRequestIdSchema),
  volunteerController.deleteVolunteer
);

export default router;
