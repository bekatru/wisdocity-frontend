import { AxiosError, InternalAxiosRequestConfig } from "axios";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}

export type ApiResponse<Response, Default = Record<string, never>> =
  | Response
  | Default;

export type ApiServiceError<T = unknown, D = any> = AxiosError<T, D>;
