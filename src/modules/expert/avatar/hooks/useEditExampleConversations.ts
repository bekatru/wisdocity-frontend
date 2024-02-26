import { ApiError, ApiServiceError } from "libs/axios";
import { MutationOptions } from "libs/reactQuery";
import { EditExampleConversationResponse,avatarRequest} from "../api";
import { useMutation } from "@tanstack/react-query";

export const useEditExampleConversations = (
    options?: MutationOptions<EditExampleConversationResponse, ApiServiceError<ApiError>>
) => {
    return useMutation({
        mutationFn: avatarRequest.editExampleConversation,
        ...options,
    })
}