import { Routes } from "../types";
import { expertRouter, learnerRouter } from ".";
import { RouteToComponentMap } from "../maps";

export const rootRouter = [
    {
      index: true,
      element: RouteToComponentMap[Routes.Account],
    },
    {
      path: Routes.Expert,
      element: RouteToComponentMap[Routes.Expert],
      children: expertRouter,
    },
    {
      path: Routes.Learner,
      element: RouteToComponentMap[Routes.Learner],
      children: learnerRouter,
    },
  ]