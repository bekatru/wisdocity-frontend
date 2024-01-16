import { useNavigate } from 'react-router-dom';
import { Routes } from 'modules/routing/types';
import { useSignUp } from 'modules/auth/hooks';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';


export function SignUpLearnerPage() {

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);

  // const { mutate: mutateLogin } = 
  useSignUp({
    onSuccess: (response) => {

      console.log(response);
    },
    onError: (error) => {
      console.error(error.message, error);
    },
  });

  // const handleSubmit = (data: any) => {
  //   mutateLogin(data);
  // };

  return (
    <AuthPageLayout
      headerText="Create a learner account"
      footerText="Already have an account?"
      footerCtaText="Sign in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm />
    </AuthPageLayout>
  );
}
