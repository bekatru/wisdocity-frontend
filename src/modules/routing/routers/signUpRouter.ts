import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const signUpRouter = [
    {
        index: true,
        element: RouteToComponentMap[Routes.SignUp],
    },
    {
        path: Routes.SignUpRole,
        element: RouteToComponentMap[Routes.SignUpRole],
    },
]