import { wisdocityApi } from "libs/axios";
import { QueryAgentResponse,QueryAgentPayload} from "./types";


export const queryAgent = async (body: QueryAgentPayload): Promise<QueryAgentResponse> => {
   
    return await wisdocityApi.post('experts/query-agent', body);
}