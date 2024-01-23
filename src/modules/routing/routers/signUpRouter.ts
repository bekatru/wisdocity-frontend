import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const signUpRouter = [
    {
        index: true,
        element: RouteToComponentMap[Routes.Register],
    },
    {
        path: Routes.SignUpRole,
        element: RouteToComponentMap[Routes.SignUpRole],
    },
]