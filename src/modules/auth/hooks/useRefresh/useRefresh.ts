import { useMutation } from "@tanstack/react-query";


import { requestRefresh } from "./refresh.request";

import { RefreshResponse } from "./refresh.types";
import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";

const useRefresh = (
  options?: MutationOptions<RefreshResponse, ApiServiceError<ApiError>>
) => {
  return useMutation({
    mutationFn: requestRefresh,
    ...options
  });
};

export default useRefresh;
