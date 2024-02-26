import { wisdocityApi } from "libs/axios";
import { QueryAgentResponse,QueryAgentPayload,AvatarDetailResponse,EditExampleConversationResponse,EditExampleConversationPayload} from "./types";


export const queryAgent = async (body: QueryAgentPayload): Promise<QueryAgentResponse> => {
   
    return await wisdocityApi.post('experts/query-agent', body);
}

export const avatarDetail = async (): Promise<AvatarDetailResponse> => {
   
    return await wisdocityApi.get('avatar');
}
export const editExampleConversation = async (body: EditExampleConversationPayload): Promise<EditExampleConversationResponse> => {
   
    return await wisdocityApi.post('avatar/edit-example-conversations', body);
}


