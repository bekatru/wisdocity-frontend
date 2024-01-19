import {useNavigate} from 'react-router-dom';
import {Routes} from 'modules/routing/types';
import {AuthPageLayout} from './layouts';
import {SignInForm} from './forms';
import { useAuthTokens, useSignIn } from 'modules/auth';


export function SignInPage() {

  const navigate = useNavigate();
  const { setTokens } = useAuthTokens()

  const navigateToSignUpPage = () => navigate(Routes.SignUp);

  const {mutate: mutateSignIn, isPending} = useSignIn({
    onSuccess: (response) => {
      setTokens(response.token.access, response.token.refresh);
    },
    onError: (error) => {
      alert(error.response?.data.message);
    },
  })

  const handleSubmit = (data: any) => {
    mutateSignIn({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <AuthPageLayout headerText="Sign in to your account" footerText="Not a member?" footerCtaText="Sign up" onFooterCtaClick={navigateToSignUpPage}>
      <SignInForm onSubmit={handleSubmit} isPending={isPending}/>
    </AuthPageLayout>
  );
}
