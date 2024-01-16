import { useMutation } from "@tanstack/react-query";


import { requestSignOut } from "./signout.request";
import { MutationOptions } from "libs/reactQuery";
import { ApiError, ApiServiceError } from "libs/axios";

const useSignOut = (
  options?: MutationOptions<unknown, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignOut,
    ...options
  });
};

export default useSignOut;
