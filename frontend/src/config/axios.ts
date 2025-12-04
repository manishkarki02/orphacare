import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL } from "./env-constant";

axios.defaults.headers.post["Content-Type"] = "application/json";

export default (path: string) => {
  const api = axios.create({
    baseURL: `${API_BASE_URL}/api${path}`,
    timeout: 10000,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    return config;
  });

  api.interceptors.response.use(
    null,
    (
      error: AxiosError<{
        code: string | number;
        message: string;
        error: string;
      }>
    ) => {
      if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
        throw new AxiosError("Server is unreachable");
      }
      if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
        throw new AxiosError("Request timeout");
      }
      if (Number(error.response?.status) >= 500) {
        throw new Error("Error Occured");
      }
      if (
        Number(error.response?.data?.code) === 401 &&
        error.response?.data?.message === "Unauthorized"
      ) {
        // TODO: remove handle logout
        // localStorage.removeItem("auth.session");
      }

      // if (import.meta.env.VITE_NODE_ENV === "development") {
      // }
      throw error;
    }
  );

  return api;
};
