import { RouteToComponentMap } from "../maps";
import { Routes } from "../types";

export const learnerRouter = [
    {
        index: true,
        element: RouteToComponentMap[Routes.LearnerHome],
    },
    {
        path: Routes.LearnerDashboard,
        element: RouteToComponentMap[Routes.LearnerDashboard],
    },
    {
        path: Routes.LearnerChats,
        element: RouteToComponentMap[Routes.LearnerChats],
    },
    {
        path: Routes.LearnerCommunity,
        element: RouteToComponentMap[Routes.LearnerCommunity],
    },
    {
        path: Routes.LearnerProfile,
        element: RouteToComponentMap[Routes.LearnerProfile],
    },
    {
        path: Routes.LearnerHelp,
        element: RouteToComponentMap[Routes.LearnerHelp],
    },
];
