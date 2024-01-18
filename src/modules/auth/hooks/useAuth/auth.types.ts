export interface AuthResponse {
    user: {
        current_role: string
    };
    learner: unknown;
    expert: unknown;
}