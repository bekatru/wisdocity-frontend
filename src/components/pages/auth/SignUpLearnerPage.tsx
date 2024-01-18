import { useNavigate } from 'react-router-dom';
import { Routes } from 'modules/routing/types';
import { useAuthTokens, useSignUp } from 'modules/auth/hooks';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';


export function SignUpLearnerPage() {

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);
  const { setTokens } = useAuthTokens()

  const { mutate: mutateLogin } = 
  useSignUp({
    onSuccess: (response) => {
      setTokens(response.token.access, response.token.refresh);
      navigate(Routes.SignUpSplash);
    },
    onError: (error) => {
      alert(error.response?.data.message)
    },
  });

  const handleSubmit = (data: any) => {
    mutateLogin({
      full_name: data.name,
      email: data.email,
      password: data.password,
      country: data.country,
      isSendMessage: data.isSendEmailsChecked,
      current_role: "LEARNER",
    })
  };

  return (
    <AuthPageLayout
      headerText="Create a learner account"
      footerText="Already have an account?"
      footerCtaText="Sign in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm onSubmit={handleSubmit} />
    </AuthPageLayout>
  );
}
