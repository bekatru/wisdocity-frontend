import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { request } from "../api";

const useSignOut = (
  options?: MutationOptions<unknown, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: request.logout,
    ...options
  });
};

export default useSignOut;
