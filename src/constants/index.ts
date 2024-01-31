export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const APP_NAME = import.meta.env.VITE_APP_NAME;

export const COOKIE_ACCESS_TOKEN_NAME = `${APP_NAME}-access-token`;
export const COOKIE_REFRESH_TOKEN_NAME = `${APP_NAME}-refresh-token`;
export const COOKIE_OPTIONS = {
  path: "/",
  secure: false
};
