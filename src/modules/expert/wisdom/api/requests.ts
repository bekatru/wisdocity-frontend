import { api } from "libs/axios";
import { Collection } from "./types";

export const fetchCollections = async (): Promise<Collection[]> => {
    return await api.get("collections");
}