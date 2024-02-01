import { Outlet, createBrowserRouter } from "react-router-dom";
import { Routes } from "./types";
import { RouteToComponentMap } from "./maps";
import { AuthLayout, UploadWisdomPage, WisdomFTUE } from "components";


export const router = createBrowserRouter([
    {
      path: Routes.NotFound,
      element: RouteToComponentMap[Routes.NotFound],
    },
    {
      path: Routes.LearnersHome,
      element: RouteToComponentMap[Routes.LearnersHome],
    },
    {
      path: Routes.Root,
      element: RouteToComponentMap[Routes.Root],
      children: [
        {
          index: true,
          element: RouteToComponentMap[Routes.Home],
        },
        
      ],
    },
  
    {
      path: Routes.SignIn,
      element: <AuthLayout><Outlet/></AuthLayout>,
      children: [
        {
          index: true,
          element: RouteToComponentMap[Routes.Login],
        },
        {
          path: Routes.Register,
          children: [
            {
                index: true,
                element: RouteToComponentMap[Routes.Register],
            },
            {
                path: Routes.SignUpRole,
                element: RouteToComponentMap[Routes.SignUpRole],
            },
        ],
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
          path: Routes.Verify,
          element: RouteToComponentMap[Routes.Verify],
        },
        {
          path: Routes.ChangeEmail,
          element: RouteToComponentMap[Routes.ChangeEmail],
        },
        {
          path: Routes.ResetPassword,
          element: RouteToComponentMap[Routes.ResetPassword],
        },
        {
          path: Routes.ChangePassword,
          element: RouteToComponentMap[Routes.ChangePassword],
        },
      ],
    },
    {
      path: Routes.App,
      element: RouteToComponentMap[Routes.App],
      children: [
        {
          path: Routes.Expert,
          element: RouteToComponentMap[Routes.Expert],
          children: [
            {
                path: Routes.ExpertHome,
                element: RouteToComponentMap[Routes.ExpertHome],
            },
            {
                path: Routes.ExpertAvatar,
                element: RouteToComponentMap[Routes.ExpertAvatar],
            },
            {
                path: Routes.ExpertWisdom,
                element: RouteToComponentMap[Routes.ExpertWisdom],
                children: [
                  {
                    index: true,
                    element: <WisdomFTUE/>
                  },
                  {
                    path: Routes.ExpertWisdomUpload,
                    element: <UploadWisdomPage/>,
                  },
                ]
            },
            {
                path: Routes.ExpertProfile,
                element: RouteToComponentMap[Routes.ExpertProfile],
            },
            {
                path: Routes.ExpertHelp,
                element: RouteToComponentMap[Routes.ExpertHelp],
            },
        ],
        },
        {
          path: Routes.Learner,
          element: RouteToComponentMap[Routes.Learner],
          children: [
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
        ],
        },
      ],
    },
  ]);
