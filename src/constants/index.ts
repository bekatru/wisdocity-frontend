export const BASE_URL = import.meta.env.VITE_NODE=="dev" ? "http://localhost:3000/" : "https://api.wisdocity.ai/";

export const ASSISTANT_AI_API_BASE_URL = "https://assistantai.dbsync.io/";

export const APP_NAME = "wisdocity";

export const COOKIE_ACCESS_TOKEN_NAME = `${APP_NAME}-access-token`;
export const COOKIE_REFRESH_TOKEN_NAME = `${APP_NAME}-refresh-token`;
export const COOKIE_OPTIONS = {
  path: "/",
  secure: false
};
