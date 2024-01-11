import {createBrowserRouter, Link, Outlet} from 'react-router-dom';
import {AuthRoute, ExpertRoute, LearnerRoute, OnboardRoute} from './routes';
import {EXPERT_ROUTES, LEARNER_ROUTES, ONBOARD_ROUTES, ROUTES} from './types';


export const router = createBrowserRouter([
  {
    path: ROUTES.SIGN_UP,
    element: <div>Sign Up</div>,
  },
  {
    path: ROUTES.SIGN_IN,
    element: <div>Sign In</div>,
  },
  {
    path: ROUTES.ONBOARD,
    element: <AuthRoute>Onboard <Outlet/></AuthRoute>,
    children: [
      {
        path: ONBOARD_ROUTES.EXPERT,
        element: <div>Onboard expert</div>,
      },
      {
        path: ONBOARD_ROUTES.LEARNER,
        element: <div>Onboard learner</div>,
      },
    ],
  },
  {
    path: ROUTES.ROOT,
    element: <AuthRoute><OnboardRoute>App <Outlet/></OnboardRoute></AuthRoute>,
    children: [
      {
        index: true,
        element: <div>
          Choose Profile
          <Link to={ROUTES.EXPERT}>Expert</Link>
          <Link to={ROUTES.LEARNER}>Learner</Link>
        </div>,
      },
      {
        path: ROUTES.EXPERT,
        element: <ExpertRoute>Expert <Outlet/></ExpertRoute>,
        children: [
          {
            index: true,
            element: <div>Home</div>,
          },
          {
            path: EXPERT_ROUTES.AVATAR,
            element: <div>Avatar</div>,
          },
          {
            path: EXPERT_ROUTES.WISDOM,
            element: <div>Wisdom</div>,
          },
          {
            path: EXPERT_ROUTES.PROFILE,
            element: <div>Profile</div>,
          },
          {
            path: EXPERT_ROUTES.HELP,
            element: <div>Help</div>,
          },
        ],
      },
      {
        path: ROUTES.LEARNER,
        element: <LearnerRoute>Learner <Outlet/></LearnerRoute>,
        children: [
          {
            index: true,
            element: <div>Home</div>,
          },
          {
            path: LEARNER_ROUTES.DASHBOARD,
            element: <div>Dashboard</div>,
          },
          {
            path: LEARNER_ROUTES.CHATS,
            element: <div>Chats</div>,
          },
          {
            path: LEARNER_ROUTES.COMMUNITY,
            element: <div>Community</div>,
          },
          {
            path: LEARNER_ROUTES.PROFILE,
            element: <div>Profile</div>,
          },
          {
            path: LEARNER_ROUTES.HELP,
            element: <div>Help</div>,
          },
        ],
      },
    ],
  },
]);
