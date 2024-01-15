import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const expertRouter = [
    {
        index: true,
        element: RouteToComponentMap[Routes.ExpertHome],
    },
    {
        path: Routes.ExpertAvatar,
        element: RouteToComponentMap[Routes.ExpertAvatar],
    },
    {
        path: Routes.ExpertWisdom,
        element: RouteToComponentMap[Routes.ExpertWisdom],
    },
    {
        path: Routes.ExpertProfile,
        element: RouteToComponentMap[Routes.ExpertProfile],
    },
    {
        path: Routes.ExpertHelp,
        element: RouteToComponentMap[Routes.ExpertHelp],
    },
];
