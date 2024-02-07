import { Outlet, createBrowserRouter } from "react-router-dom";
import { Routes } from "./types";
import { AppLayout, AuthLayout, Billing, ChangeEmailPage, ChangePasswordPage, CreateCollectionPage, ExpertProfileLayout, HomePage, LearnersPage, Profile, ResetPasswordPage, RootLayout, SelectRolePage, Settings, SignInPage, SignUpPage, UploadWisdomPage, VerificationPage, VerifyAndContinuePage, WelcomePage, WisdomFTUE, WisdomLayout, ExpertDashboard, AvatarDashboard, CollectionsPage, Collection, Files } from "components";
import { AuthRoute } from "./routes";


export const router = createBrowserRouter([
    {
      path: Routes.NotFound,
      element: <div>404</div>,
    },
    {
      path: Routes.Root,
      element: <RootLayout><Outlet/></RootLayout>,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path: Routes.Learners,
          element: <LearnersPage/>,
        },
      ],
    },
  
    {
      path: Routes.SignIn,
      element: <AuthLayout><Outlet/></AuthLayout>,
      children: [
        {
          index: true,
          element: <SignInPage/>,
        },
        {
          path: Routes.Register,
          children: [
            {
                index: true,
                element: <SelectRolePage/>,
            },
            {
                path: Routes.SignUpRole,
                element: <SignUpPage/>,
            },
        ],
        },
        {
          path: Routes.Welcome,
          element: <WelcomePage/>,
        },
        {
          path: Routes.Verification,
          element: <VerificationPage/>,
        },
        {
          path: Routes.Verify,
          element: <VerifyAndContinuePage/>,
        },
        {
          path: Routes.ChangeEmail,
          element: <ChangeEmailPage/>,
        },
        {
          path: Routes.ResetPassword,
          element: <ResetPasswordPage/>,
        },
        {
          path: Routes.ChangePassword,
          element: <ChangePasswordPage/>,
        },
      ],
    },
    {
      path: Routes.App,
      element: <AuthRoute><AppLayout><Outlet/></AppLayout></AuthRoute>,
      children: [
        {
          path: Routes.Expert,
          element: <Outlet/>,
          children: [

            {
              path: Routes.ExpertWisdomCreateCollection,
              element: <CreateCollectionPage/>
            },
            {
                path: Routes.ExpertHome,
                element: <ExpertDashboard/>,
            },
            {
                path: Routes.ExpertAvatar,
                element: <AvatarDashboard/>
            },
            {
                path: Routes.ExpertWisdom,
                element: <WisdomLayout><Outlet/></WisdomLayout>,
                children: [
                  {
                    index: true,
                    element: <Files/>
                  },
                  {
                    path: Routes.ExpertWisdomCollections,
                    element: <Outlet/>,
                    children: [
                      {
                        index: true,
                        element: <CollectionsPage/>,
                      },
                      {
                        path: Routes.ExpertWisdomCollection,
                        element: <Collection/>
                      },
                    ]
                  },
                  {
                    path: Routes.ExpertWisdomUploadToCollection,
                    element: <UploadWisdomPage/>,
                  },
                ]
            },
            {
                path: Routes.ExpertProfile,
                element: <ExpertProfileLayout><Outlet/></ExpertProfileLayout>,
                children: [
                  {
                    index: true,
                    element: <Profile/>
                  },
                  {
                    path: Routes.ExpertProfileBilling,
                    element: <Billing/>
                  },
                  {
                    path: Routes.ExpertProfileSettings,
                    element: <Settings/>
                  }
                ]
            },
            {
                path: Routes.ExpertHelp,
                element: <div>Help</div>,
            },
        ],
        },
        {
          path: Routes.Learner,
          element: <div>Learner <Outlet/> Page</div>,
          children: [
            {
                index: true,
                element: <div>Home</div>,
            },
            {
                path: Routes.LearnerDashboard,
                element: <div>Dashboard</div>,
            },
            {
                path: Routes.LearnerChats,
                element: <div>Chats</div>,
            },
            {
                path: Routes.LearnerCommunity,
                element: <div>Community</div>,
            },
            {
                path: Routes.LearnerProfile,
                element: <div>Profile</div>,
            },
            {
                path: Routes.LearnerHelp,
                element: <div>Help</div>,
            },
        ],
        },
      ],
    },
  ]);
