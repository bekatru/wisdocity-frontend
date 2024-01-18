export interface SendVerificationResponse {
    status: number;
    message?: string;
    error?: string;
}

export interface SendVerificationPayload {
    email: string;
}
