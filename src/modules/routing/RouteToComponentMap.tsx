import * as React from 'react';
import {Outlet} from 'react-router-dom';
import {EXPERT_ROUTES, LEARNER_ROUTES, ONBOARD_ROUTES, ROUTES} from './types';
import {AuthRoute, ExpertRoute, LearnerRoute, OnboardRoute} from './routes';


type RouteKeys = ROUTES | ONBOARD_ROUTES | LEARNER_ROUTES | EXPERT_ROUTES

export const RouteToComponentMap: { [key: RouteKeys]: React.ReactNode } = {
  [ROUTES.SIGN_UP]: <div>Sign Up</div>,
  [ROUTES.SIGN_IN]: <div>Sign Up</div>,

  [ROUTES.ONBOARD]: <AuthRoute>Onboard <Outlet/></AuthRoute>,
  [ONBOARD_ROUTES.EXPERT]: <div>Onboard expert</div>,
  [ONBOARD_ROUTES.LEARNER]: <div>Onboard learner</div>,

  [ROUTES.ROOT]: <AuthRoute><OnboardRoute>App <Outlet/></OnboardRoute></AuthRoute>,
  [ROUTES.PROFILE]: <div>Profile</div>,
  [ROUTES.EXPERT]: <ExpertRoute>Expert <Outlet/></ExpertRoute>,
  [EXPERT_ROUTES.HOME]: <div>Home</div>,
  [EXPERT_ROUTES.AVATAR]: <div>Avatar</div>,
  [EXPERT_ROUTES.WISDOM]: <div>Wisdom</div>,
  [EXPERT_ROUTES.PROFILE]: <div>Profile</div>,
  [EXPERT_ROUTES.HELP]: <div>Help</div>,

  [ROUTES.LEARNER]: <LearnerRoute>Learner <Outlet/></LearnerRoute>,
  [LEARNER_ROUTES.HOME]: <div>Home</div>,
  [LEARNER_ROUTES.DASHBOARD]: <div>Dashboard</div>,
  [LEARNER_ROUTES.CHATS]: <div>Chats</div>,
  [LEARNER_ROUTES.COMMUNITY]: <div>Community</div>,
  [LEARNER_ROUTES.PROFILE]: <div>Profile</div>,
  [LEARNER_ROUTES.HELP]: <div>Help</div>,
};
