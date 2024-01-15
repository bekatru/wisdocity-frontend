import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../types";
import { RouteToComponentMap } from "../maps";
import { onboardRouter, rootRouter } from ".";


export const appRouter = createBrowserRouter([
    {
      path: Routes.NotFound,
      element: RouteToComponentMap[Routes.NotFound],
    },
    {
      path: Routes.SignUp,
      element: RouteToComponentMap[Routes.SignUp],
    },
    {
      path: Routes.SignIn,
      element: RouteToComponentMap[Routes.SignIn],
    },
    {
      path: Routes.Onboard,
      element: RouteToComponentMap[Routes.Onboard],
      children: onboardRouter,
    },
    {
      path: Routes.Root,
      element: RouteToComponentMap[Routes.Root],
      children: rootRouter,
    },
  ]);
