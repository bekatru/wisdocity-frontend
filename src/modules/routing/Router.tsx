import {createBrowserRouter} from 'react-router-dom';
import {Routes} from './types';
import {RouteToComponentMap} from './RouteToComponentMap';


export const router = createBrowserRouter([
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
    children: [
      {
        path: Routes.OnboardExpert,
        element: RouteToComponentMap[Routes.OnboardExpert],
      },
      {
        path: Routes.OnboardLearner,
        element: RouteToComponentMap[Routes.OnboardLearner],
      },
    ],
  },
  {
    path: Routes.Root,
    element: RouteToComponentMap[Routes.Root],
    children: [
      {
        index: true,
        element: RouteToComponentMap[Routes.Account],
      },
      {
        path: Routes.Expert,
        element: RouteToComponentMap[Routes.Expert],
        children: [
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
