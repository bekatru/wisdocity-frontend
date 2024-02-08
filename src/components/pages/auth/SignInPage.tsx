import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Routes} from 'modules/routing';
import { useAuthTokens, useLogin } from 'modules/auth';
import {AuthPageLayout} from './layouts';
import {SignInForm} from './forms';
import { SignInPayload } from 'modules/auth/api';


export function SignInPage() {

  const navigate = useNavigate();
  const { setTokens } = useAuthTokens()

  const navigateToSignUpPage = () => navigate(Routes.Register);

  const {mutate: mutateSignIn, isPending} = useLogin({
    onSuccess: (response) => {
      setTokens(response.access_token, response.refresh_token);
      toast.success("Signed in successfuly")
      navigate(Routes.App);
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  })

  const handleSubmit = (data: SignInPayload) => {
    mutateSignIn({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <AuthPageLayout headerText="Sign in to Wisdocity" footerText="Not a member?" footerCtaText="Sign up" onFooterCtaClick={navigateToSignUpPage}>
      <SignInForm onSubmit={handleSubmit} isPending={isPending}/>
    </AuthPageLayout>
  );
}
