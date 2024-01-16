import { useMutation } from "@tanstack/react-query";


import { requestSignIn } from "./signin.request";

import { SignInResponse } from "./signin.types";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

const useSignIn = (
  options?: MutationOptions<SignInResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestSignIn,
    ...options
  });
};

export default useSignIn;
