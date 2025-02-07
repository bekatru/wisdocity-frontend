import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS, COOKIE_REFRESH_TOKEN_NAME } from "constants";
import { CustomAxiosRequestConfig } from "../types";
import { Cookies } from "react-cookie";


export const wisdocityApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const cookies = new Cookies();

wisdocityApi.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const token = cookies.get(COOKIE_ACCESS_TOKEN_NAME);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);

wisdocityApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    const refreshToken = cookies.get(COOKIE_REFRESH_TOKEN_NAME);

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
        const { access_token, refresh_token } = await refreshAccessToken();

        cookies.set(COOKIE_ACCESS_TOKEN_NAME, access_token, COOKIE_OPTIONS);
        cookies.set(COOKIE_REFRESH_TOKEN_NAME, refresh_token, COOKIE_OPTIONS);

        return await wisdocityApi(originalRequest);
      } catch (refreshError) {
        cookies.remove(COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS);
        cookies.remove(COOKIE_REFRESH_TOKEN_NAME, COOKIE_OPTIONS);

        return await Promise.reject(error);
      }
    }

    return await Promise.reject(error);
  }
);

const refreshAccessToken = async (): Promise<{
  access_token: string;
  refresh_token: string;
}> => {
  const refreshToken = cookies.get(COOKIE_REFRESH_TOKEN_NAME);

  const response = await axios.get(`${BASE_URL}auth/refresh`, {
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  });

  return response.data;
};
