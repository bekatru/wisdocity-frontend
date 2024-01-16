import axios from "axios";
import { BASE_URL } from "constants";


export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
