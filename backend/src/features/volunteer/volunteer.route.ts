import * as volunteerController from "@/features/volunteer/volunteer.controller";
import { Router } from "express";
import { validationMiddleware } from "@/common/middlewares/validator.middleware";
import { accessTokenValidator } from "@/common/middlewares/token.middleware";
import { create } from "domain";
import {
  createVolunteerRequestSchema,
  updateVolunteerRequestSchema,
  volunteerRequestIdSchema,
} from "@/features/volunteer/volunteer.schema";

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
