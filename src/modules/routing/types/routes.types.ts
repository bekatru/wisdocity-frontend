export enum Routes {
  NotFound = '*',
  Root = '/',
  Home = '/home',
  LearnersHome = 'learners-home',
  App = '/app',

  SignIn = '/signin',
  Login = '/signin/login',
  Register = '/signin/register',
  SignUpRole = ':role',

  Welcome = "/signin/welcome",
  Verification = '/signin/verification',
  Verify = '/signin/verify',
  ResetPassword = '/signin/reset-password',
  ChangePassword = '/signin/change-password',
  ChangeEmail = '/signin/change-email',

  Learner = '/app/learner',
  LearnerHome = '/app/learner/home',
  LearnerDashboard = '/app/learner/dashboard',
  LearnerChats = '/app/learner/chats',
  LearnerCommunity = '/app/learner/community',
  LearnerProfile = '/app/learner/profile',
  LearnerHelp = '/app/learner/help',

  Expert = '/app/expert',
  ExpertHome = '/app/expert/home',
  ExpertAvatar = '/app/expert/avatar',
  ExpertWisdom = '/app/expert/wisdom',
  ExpertProfile = '/app/expert/profile',
  ExpertHelp = '/app/expert/help',
}
