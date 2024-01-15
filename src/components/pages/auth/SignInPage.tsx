import {useNavigate} from 'react-router-dom';
import {Routes} from '../../../modules/routing/types';
import {AuthPageFooter} from './sections/AuthPageFooter';
import {AuthPageHeader} from './sections/AuthPageHeader';
import {AuthPageLayout} from './layouts/AuthPageLayout';
import {SignInForm} from './forms/SignInForm';


export function SignInPage() {

  const navigate = useNavigate();

  const navigateToSignUpPage = () => navigate(Routes.SignUp);

  return (
    <AuthPageLayout>
      <AuthPageHeader text="Sign in to your account"/>
      <SignInForm/>
      <AuthPageFooter text="Not a member?" ctaText="Sign up" onCtaClick={navigateToSignUpPage}/>
    </AuthPageLayout>
  );
}
