import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { RefreshResponse, requestRefresh } from "../api";

const useRefresh = (
  options?: MutationOptions<RefreshResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestRefresh,
    ...options
  });
};

export default useRefresh;
