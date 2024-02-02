import axios from "axios";
import { ASSISTANT_AI_API_BASE_URL } from "constants";

export const assistant = axios.create({
    baseURL: ASSISTANT_AI_API_BASE_URL
  });