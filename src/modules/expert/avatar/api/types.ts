export interface QueryAgentPayload  {
    userId: number;
    userQuery: string;
}

export interface QueryAgentResponse  {
    answer: string;
    question:string;
    supportingDocuments:string;
}
interface User {
    id: number;
    password: string;
    email: string;
    current_role: string;
    is_verified: boolean;
    is_subscribed: boolean;
    refresh_token: string;
    created_at: string;
    updated_at: string;
  }
  


export interface AvatarDetailResponse  {
    exampleConversations: string;
    id:number;
    user: User;
  
}

export interface EditExampleConversationResponse  {
    exampleConversations: string;
  
}
export interface EditExampleConversationPayload  {
    id:number;
    exampleConversations: string;
    userId:number;
  
}