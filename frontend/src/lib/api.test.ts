import { describe, expect, it } from "vitest";
import { getApiErrorMessage } from "@/lib/api";

describe("getApiErrorMessage", () => {
  it("returns an API response message for Axios errors", () => {
    const error = {
      isAxiosError: true,
      response: { data: { message: "Email is already registered" } },
    };

    expect(getApiErrorMessage(error, "Request failed")).toBe(
      "Email is already registered"
    );
  });

  it("returns the fallback for unknown errors", () => {
    expect(getApiErrorMessage(new Error("Network failed"), "Request failed")).toBe(
      "Request failed"
    );
  });
});
