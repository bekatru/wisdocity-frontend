import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../types";
import { RouteToComponentMap } from "../maps";
import { onboardRouter, rootRouter, signUpRouter } from ".";


export const appRouter = createBrowserRouter([
    {
      path: Routes.Test,
      element: RouteToComponentMap[Routes.Test],
    },
    {
      path: Routes.NotFound,
      element: RouteToComponentMap[Routes.NotFound],
    },
    {
      path: Routes.SignIn,
      element: RouteToComponentMap[Routes.SignIn],
    },
    {
      path: Routes.SignUp,
      children: signUpRouter,
    },
    {
      path: Routes.Welcome,
      element: RouteToComponentMap[Routes.Welcome],
    },
    {
      path: Routes.Verification,
      element: RouteToComponentMap[Routes.Verification],
    },
    {
      path: Routes.ChangeEmail,
      element: RouteToComponentMap[Routes.ChangeEmail],
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
