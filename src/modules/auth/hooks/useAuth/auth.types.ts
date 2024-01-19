export interface AuthResponse {
    user: {
        dataValues: {
            current_role: string;
            email: string;
            is_verified: boolean;
            full_name: string;
        }
    };
    learner: unknown;
    expert: unknown;
}