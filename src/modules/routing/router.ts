import {createBrowserRouter} from 'react-router-dom';
import {EXPERT_ROUTES, LEARNER_ROUTES, ONBOARD_ROUTES, ROUTES} from './types';
import {RouteToComponentMap} from './RouteToComponentMap';


export const router = createBrowserRouter([
  {
    path: ROUTES.SIGN_UP,
    element: RouteToComponentMap[ROUTES.SIGN_UP],
  },
  {
    path: ROUTES.SIGN_IN,
    element: RouteToComponentMap[ROUTES.SIGN_IN],
  },
  {
    path: ROUTES.ONBOARD,
    element: RouteToComponentMap[ROUTES.ONBOARD],
    children: [
      {
        path: ONBOARD_ROUTES.EXPERT,
        element: RouteToComponentMap[ONBOARD_ROUTES.EXPERT],
      },
      {
        path: ONBOARD_ROUTES.LEARNER,
        element: RouteToComponentMap[ONBOARD_ROUTES.LEARNER],
      },
    ],
  },
  {
    path: ROUTES.ROOT,
    element: RouteToComponentMap[ROUTES.ROOT],
    children: [
      {
        index: true,
        element: RouteToComponentMap[ROUTES.PROFILE],
      },
      {
        path: ROUTES.EXPERT,
        element: RouteToComponentMap[ROUTES.EXPERT],
        children: [
          {
            index: true,
            element: RouteToComponentMap[EXPERT_ROUTES.HOME],
          },
          {
            path: EXPERT_ROUTES.AVATAR,
            element: RouteToComponentMap[EXPERT_ROUTES.AVATAR],
          },
          {
            path: EXPERT_ROUTES.WISDOM,
            element: RouteToComponentMap[EXPERT_ROUTES.WISDOM],
          },
          {
            path: EXPERT_ROUTES.PROFILE,
            element: RouteToComponentMap[EXPERT_ROUTES.PROFILE],
          },
          {
            path: EXPERT_ROUTES.HELP,
            element: RouteToComponentMap[EXPERT_ROUTES.HELP],
          },
        ],
      },
      {
        path: ROUTES.LEARNER,
        element: RouteToComponentMap[ROUTES.LEARNER],
        children: [
          {
            index: true,
            element: RouteToComponentMap[LEARNER_ROUTES.HOME],
          },
          {
            path: LEARNER_ROUTES.DASHBOARD,
            element: RouteToComponentMap[LEARNER_ROUTES.DASHBOARD],
          },
          {
            path: LEARNER_ROUTES.CHATS,
            element: RouteToComponentMap[LEARNER_ROUTES.CHATS],
          },
          {
            path: LEARNER_ROUTES.COMMUNITY,
            element: RouteToComponentMap[LEARNER_ROUTES.COMMUNITY],
          },
          {
            path: LEARNER_ROUTES.PROFILE,
            element: RouteToComponentMap[LEARNER_ROUTES.PROFILE],
          },
          {
            path: LEARNER_ROUTES.HELP,
            element: RouteToComponentMap[LEARNER_ROUTES.HELP],
          },
        ],
      },
    ],
  },
]);
