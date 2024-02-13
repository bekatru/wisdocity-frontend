export interface QueryAgentPayload  {
    userId: number;
    userQuery: string;
}

export interface QueryAgentResponse  {
    answer: string;
    question:string;
    supportingDocuments:string;
}