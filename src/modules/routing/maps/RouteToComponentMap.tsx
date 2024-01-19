import * as React from 'react';
import {Outlet} from 'react-router-dom';
import {Routes} from '../types';
import {AuthRoute, ExpertRoute, LearnerRoute} from '../routes';
import {SignInPage, SignUpPage, SelectRolePage, WelcomePage, ChangeEmailPage, VerificationPage} from 'components/pages/auth';
import { TestPage } from 'components/pages/test';
import { OnboardPage } from 'components/pages/onboard/OnboardPage';
import {LandingPage} from 'components/pages/landing';


export const RouteToComponentMap: { [key in Routes]: React.ReactNode } = {
  [Routes.Test]: <TestPage/>,
  [Routes.NotFound]: <div>404</div>,

  [Routes.Home]: <LandingPage/>,
  [Routes.SignIn]: <SignInPage/>,
  [Routes.SignUp]: <SelectRolePage/>,
  [Routes.SignUpRole]: <SignUpPage/>,

  [Routes.Welcome]: <AuthRoute><WelcomePage/></AuthRoute>,
  [Routes.Verification]: <AuthRoute><VerificationPage/></AuthRoute>,
  [Routes.ChangeEmail]: <AuthRoute><ChangeEmailPage/></AuthRoute>,


  [Routes.Onboard]: <AuthRoute>onboard<Outlet/></AuthRoute>,
  [Routes.OnboardExpert]: <OnboardPage/>,
  [Routes.OnboardLearner]: <OnboardPage/>,

  [Routes.App]: <AuthRoute><Outlet/></AuthRoute>,

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
