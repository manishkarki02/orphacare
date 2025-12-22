import { Router } from "express";
import * as reportController from "@/features/report/report.controller";
import { validationMiddleware } from "@/common/middlewares/validator.middleware";
import { accessTokenValidator } from "@/common/middlewares/token.middleware";
import { upload } from "@/config/multer.config";
import {
  createReportRequestSchema,
  fetchReportDetailsRequestSchema,
  updateReportRequestSchema,
} from "@/features/report/report.schema";

const router = Router();

router.post(
  "/",
  accessTokenValidator,
  upload.single("image"),
  validationMiddleware(createReportRequestSchema),
  reportController.createMissingReport
);

router.get("/", accessTokenValidator, reportController.fetchAllMissingReports);

router.get("/me", accessTokenValidator, reportController.fetchMyMissingReports);

router.get(
  "/:id",
  accessTokenValidator,
  validationMiddleware(fetchReportDetailsRequestSchema),
  reportController.fetchMissingReportDetails
);

router.patch(
  "/:id",
  accessTokenValidator,
  validationMiddleware(updateReportRequestSchema),
  reportController.updateMissingReport
);

router.delete(
  "/:id",
  accessTokenValidator,
  validationMiddleware(fetchReportDetailsRequestSchema),
  reportController.deleteMissingReport
);

export default router;
