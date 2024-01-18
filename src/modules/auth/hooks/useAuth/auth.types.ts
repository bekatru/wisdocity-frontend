export interface AuthResponse {
    user: {
        current_role: string;
        email: string;
        is_verified: boolean;
    };
    learner: unknown;
    expert: unknown;
}