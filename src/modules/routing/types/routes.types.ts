export enum Routes {
  Test = 'test',
  NotFound = '*',
  Root = '/',
  SignIn = '/signin',
  SignUp = '/signup',
  SignUpSplash = "/signup/splash",
  SignUpVerification = '/signup/verification',
  SignUpChangeEmail = '/signup/change-email',

  SignUpIndex = '/signup/index',
  SignUpLearner = '/signup/learner',
  SignUpExpert = '/signup/expert',
  Account = '/account',

  Onboard = '/onboard',
  OnboardExpert = '/onboard/expert/:step',
  OnboardLearner = '/onboard/learner/:step',

  Learner = '/learner',
  LearnerHome = '/learner/home',
  LearnerDashboard = '/learner/dashboard',
  LearnerChats = '/learner/chats',
  LearnerCommunity = '/learner/community',
  LearnerProfile = '/learner/profile',
  LearnerHelp = '/learner/help',

  Expert = '/expert',
  ExpertHome = '/expert/home',
  ExpertAvatar = '/expert/avatar',
  ExpertWisdom = '/expert/wisdom',
  ExpertProfile = '/expert/profile',
  ExpertHelp = '/expert/help',
}
