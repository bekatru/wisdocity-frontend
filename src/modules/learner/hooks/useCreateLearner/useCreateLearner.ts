import { useMutation } from "@tanstack/react-query";
import { ApiError, ApiServiceError } from "libs/axios";
import { CreateLearnerResponse } from "./createLearner.types";
import { requestCreateLearner } from "./createLearner.request";
import { MutationOptions } from "libs/reactQuery";

const useCreateLearner = (
    options?: MutationOptions<CreateLearnerResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: request.CreateLearner,
        ...options
    })
}

export default useCreateLearner;