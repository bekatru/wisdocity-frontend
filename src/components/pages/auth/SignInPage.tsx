import {useNavigate} from 'react-router-dom';
import {Routes} from 'modules/routing/types';
import {AuthPageLayout} from './layouts';
import {SignInForm} from './forms';


export function SignInPage() {

  const navigate = useNavigate();

  const navigateToSignUpPage = () => navigate(Routes.SignUp);

  return (
    <AuthPageLayout headerText="Sign in to your account" footerText="Not a member?" footerCtaText="Sign in" onFooterCtaClick={navigateToSignUpPage}>
      <SignInForm/>
    </AuthPageLayout>
  );
}
