import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { RefreshResponse, request } from "../api";

const useRefresh = (
  options?: MutationOptions<RefreshResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: request.refreshTokens,
    ...options
  });
};

export default useRefresh;
