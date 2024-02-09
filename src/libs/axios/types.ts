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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiServiceError<T = unknown, D = any> = AxiosError<T, D>;
