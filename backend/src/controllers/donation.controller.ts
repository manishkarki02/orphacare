import { ValidatedRequestHandler } from "@/types";
import * as donationService from "@/services/donation.service";
import {
  CreateDonationRequestSchema,
  GetDonationRequestSchema,
  UpdateDonationRequestSchema,
} from "@/validations/donations.schema";
import ApiResponse from "@/utils/response.utils";
import HttpStatus from "http-status";

// Create a donation
export const createDonation: ValidatedRequestHandler<
  CreateDonationRequestSchema
> = async (req, res) => {
  const donation = await donationService.createDonation(
    req.body,
    res.locals.userId
  );

  return ApiResponse.success(res, {
    statusCode: HttpStatus.CREATED,
    message: "Donation created successfully.",
    data: donation,
  });
};

// Fetch all donations
export const fetchAllDonations: ValidatedRequestHandler = async (_req, res) => {
  const donations = await donationService.fetchAllDonations();

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "All donations shown successfully.",
    data: donations,
  });
};

// Fetch only my donation
export const fetchMyDonations: ValidatedRequestHandler = async (_req, res) => {
  const donations = await donationService.fetchMyDonations(res.locals.userId);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Donations fetched successfully.",
    data: donations,
  });
};

// Fetch a single donation by id
export const fetchDonationDetails: ValidatedRequestHandler<
  GetDonationRequestSchema
> = async (req, res) => {
  const donationDetail = await donationService.fetchDonationById(req.params.id);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Donation detail fetched successfully.",
    data: donationDetail,
  });
};

// updating a donation
export const updateDonation: ValidatedRequestHandler<
  UpdateDonationRequestSchema
> = async (req, res) => {
  const updatedData = await donationService.updateDonation(
    req.body,
    req.params.id,
    res.locals.userId
  );

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Donation updated successfully.",
    data: updatedData,
  });
};

// deleting a donation
export const deleteDonation: ValidatedRequestHandler<
  GetDonationRequestSchema
> = async (req, res) => {
  await donationService.deleteDonation(req.params.id, res.locals.userId);

  return ApiResponse.success(res, {
    statusCode: HttpStatus.OK,
    message: "Donation deleted successfully.",
  });
};
