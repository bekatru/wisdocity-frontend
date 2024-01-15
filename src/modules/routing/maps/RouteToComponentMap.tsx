import * as React from 'react';
import {Outlet} from 'react-router-dom';
import {Routes} from '../types';
import {AuthRoute, ExpertRoute, LearnerRoute, OnboardRoute} from '../routes';
import {SignInPage, SignUpPage} from '../../../components/pages/auth';


export const RouteToComponentMap: { [key in Routes]: React.ReactNode } = {
  [Routes.NotFound]: <div>404</div>,

  [Routes.SignUp]: <SignUpPage/>,
  [Routes.SignIn]: <SignInPage/>,

  [Routes.Onboard]: <AuthRoute>Onboard <Outlet/></AuthRoute>,
  [Routes.OnboardExpert]: <div>Onboard expert</div>,
  [Routes.OnboardLearner]: <div>Onboard learner</div>,

  [Routes.Root]: <AuthRoute><OnboardRoute>App <Outlet/></OnboardRoute></AuthRoute>,

  [Routes.Account]: <div>Account</div>,

  [Routes.Expert]: <ExpertRoute>Expert <Outlet/></ExpertRoute>,
  [Routes.ExpertHome]: <div>Home</div>,
  [Routes.ExpertAvatar]: <div>Avatar</div>,
  [Routes.ExpertWisdom]: <div>Wisdom</div>,
  [Routes.ExpertProfile]: <div>Profile</div>,
  [Routes.ExpertHelp]: <div>Help</div>,

  [Routes.Learner]: <LearnerRoute>Learner <Outlet/></LearnerRoute>,
  [Routes.LearnerHome]: <div>Home</div>,
  [Routes.LearnerDashboard]: <div>Dashboard</div>,
  [Routes.LearnerChats]: <div>Chats</div>,
  [Routes.LearnerCommunity]: <div>Community</div>,
  [Routes.LearnerProfile]: <div>Profile</div>,
  [Routes.LearnerHelp]: <div>Help</div>,
};
