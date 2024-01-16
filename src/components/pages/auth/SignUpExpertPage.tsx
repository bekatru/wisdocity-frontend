import {useNavigate} from 'react-router-dom';
import {Routes} from 'modules/routing/types';
import {AuthPageLayout} from './layouts';
import {SignUpExpertForm} from './forms';


export function SignUpExpertPage() {

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);

  return (
    <AuthPageLayout headerText="Sign up to a learner account" footerText="Already have an account?" footerCtaText="Sign in" onFooterCtaClick={navigateToSignInPage}>
        <SignUpExpertForm/>
    </AuthPageLayout>
  );
}
