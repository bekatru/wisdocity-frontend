import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "constants";
import { useAuthTokens } from "modules/auth";
import { CustomAxiosRequestConfig } from "./api.types";
import { requestRefresh } from "modules/auth/hooks/useRefresh";


export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  async config => {
    const { accessToken } = useAuthTokens();
    config.headers.Authorization = `Bearer ${accessToken}`
    return config;
  },
  error => {
    Promise.reject(error)
  });


instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    const { refreshToken, setTokens, removeTokens } = useAuthTokens();

    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest?._retry &&
      refreshToken
    ) {
      if (!originalRequest) {
        return await Promise.reject(error);
      }

      originalRequest._retry = true;

      try {

        const response = await requestRefresh({refreshToken});
        setTokens(response.data.tokens.access, response.data.tokens.refresh);
        return await instance(originalRequest);

      } catch (refreshError) {

        removeTokens();
        return await Promise.reject(error);
        
      }
    }

    return await Promise.reject(error);
  }
);
