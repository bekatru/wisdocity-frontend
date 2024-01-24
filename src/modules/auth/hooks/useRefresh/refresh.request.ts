
import { api } from "libs/axios";
import { RefreshPayload, RefreshResponse } from "./refresh.types";

export const requestRefresh = async (
  body: RefreshPayload
): Promise<RefreshResponse> => {
  return await api.post("users/refresh", body);
};
