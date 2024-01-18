
import { instance } from "libs/axios";
import { RefreshPayload, RefreshResponse } from "./refresh.types";

export const requestRefresh = async (
  body: RefreshPayload
): Promise<RefreshResponse> => {
  return await instance.post("users/refresh", body);
};
