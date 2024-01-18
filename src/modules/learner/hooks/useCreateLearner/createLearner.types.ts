export type CreateLearnerResponse = unknown

export interface CreateLearnerPayload {
    purpose: string;
    topics: string[];
    way_for_learning: string[],
    goals: string[],
}