import { api } from "libs/axios";
import { CreateLearnerPayload, CreateLearnerResponse } from "./createLearner.types";

export const requestCreateLearner = async (
    body: CreateLearnerPayload
): Promise<CreateLearnerResponse> => {
    return await api.post('learner/create', body)
}