import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";
import { requestSignOut } from "../api";

const useSignOut = (
  options?: MutationOptions<unknown, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignOut,
    ...options
  });
};

export default useSignOut;
