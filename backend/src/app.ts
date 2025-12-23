// Importing external modules
import express, { type Application } from "express";
import cors from "cors";
import path from "path";
import HttpStatus from "http-status";

const app: Application = express();

// Importing custom modules
import Environment from "./config/env.config";
import globalErrorHandler from "./common/middlewares/error.middleware";
import router from "@/common/routes";
import ApiResponse from "./common/utils/response.utils";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "@/config/swagger.config";

// Built-in / Imported Middlewares
app.use(
  cors({
    origin: function (
      origin: any,
      callback: (err: Error | null, allow?: boolean) => void
    ) {
      if (!origin || Environment.get("CORS_ORIGIN").includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

// Routing
app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use((_req, res) => {
  ApiResponse.error(res, {
    statusCode: HttpStatus.NOT_FOUND,
    message: "API endpoint not found",
  });
});
app.use(globalErrorHandler);

export default app;
