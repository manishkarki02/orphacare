import HttpStatus from "http-status";
import * as volunteerService from "@/services/volunteer.service";
import { ValidatedRequestHandler } from "@/types";
import {
  CreateVolunteerRequestSchema,
  UpdateVolunteerRequestSchema,
  VolunteerRequestIdSchema,
} from "@/validations/volunteer.schema";
import ApiResponse from "@/utils/response.utils";

export const createVolunteer: ValidatedRequestHandler<
  CreateVolunteerRequestSchema
> = async (req, res) => {
  const createdVolunteer = await volunteerService.createVolunteer(
    req.body,
    req.file
  );

  return ApiResponse.success(res, {
    statusCode: HttpStatus.CREATED,
    message: "Volunteer created successfully",
    data: createdVolunteer,
  });
};

export const fetchAllVolunteers: ValidatedRequestHandler = async (req, res) => {
  const volunteers = await volunteerService.fetchAllVolunteers();

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Volunteers fetched successfully",
    data: volunteers,
  });
};

export const fetchVolunteerDetail: ValidatedRequestHandler<
  VolunteerRequestIdSchema
> = async (req, res) => {
  const volunteer = await volunteerService.fetchVolunteerById(req.params.id);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Volunteer detail fetched successfully",
    data: volunteer,
  });
};

export const updateVolunteer: ValidatedRequestHandler<
  UpdateVolunteerRequestSchema
> = async (req, res) => {
  const updatedVolunteer = await volunteerService.updateVolunteer(
    req.params.id,
    req.body,
    req.file
  );

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Volunteer updated successfully",
    data: updatedVolunteer,
  });
};

export const deleteVolunteer: ValidatedRequestHandler<
  VolunteerRequestIdSchema
> = async (req, res) => {
  await volunteerService.deleteVolunteer(req.params.id);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Volunteer deleted successfully",
  });
};
