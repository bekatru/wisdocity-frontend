export enum Routes {
  Test = 'test',
  NotFound = '*',
  Home = '/',
  App = '/app',

  SignIn = '/signin',
  SignUp = '/signup',
  SignUpRole = ':role',

  Welcome = "/welcome",
  Verification = '/verification',
  Verify = '/verify',
  ResetPassword = '/reset-password',
  ChangePassword = '/change-password',
  ChangeEmail = '/change-email',

  Onboard = '/onboard',
  OnboardExpert = '/onboard/expert/:step',
  OnboardLearner = '/onboard/learner/:step',

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
