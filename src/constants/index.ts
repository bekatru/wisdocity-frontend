export const BASE_URL = "http://ec2-13-49-48-193.eu-north-1.compute.amazonaws.com:5500/api/"

export const APP_NAME = "WISDOCITY";

export const COOKIE_ACCESS_TOKEN_NAME = `${APP_NAME}-access-token`;
export const COOKIE_REFRESH_TOKEN_NAME = `${APP_NAME}-refresh-token`;
export const COOKIE_OPTIONS = {
  path: "/",
  secure: false
};