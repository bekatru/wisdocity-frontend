import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const signUpRouter = [
    {
        index: true,
        element: RouteToComponentMap[Routes.SignUpIndex],
    },
    {
        path: Routes.SignUpLearner,
        element: RouteToComponentMap[Routes.SignUpLearner],
    },
    {
        path: Routes.SignUpExpert,
        element: RouteToComponentMap[Routes.SignUpExpert],
    },
]