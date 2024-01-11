import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const onboardRouter = [
    {
        path: Routes.OnboardExpert,
        element: RouteToComponentMap[Routes.OnboardExpert],
    },
    {
        path: Routes.OnboardLearner,
        element: RouteToComponentMap[Routes.OnboardLearner],
    },
];
