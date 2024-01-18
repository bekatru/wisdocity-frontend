import { instance } from "libs/axios";
import { CreateLearnerPayload, CreateLearnerResponse } from "./createLearner.types";

export const requestCreateLearner = async (
    body: CreateLearnerPayload
): Promise<CreateLearnerResponse> => {
    return await instance.post('learner/create', body)
}