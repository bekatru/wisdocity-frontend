import {useNavigate} from 'react-router-dom';
import {Routes} from '../../../modules/routing/types';
import {AuthPageLayout} from './layouts';
import {SignUpLearnerForm} from './forms';


export function SignUpLearnerPage() {

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);

  console.log('asda')

  return (
    <AuthPageLayout headerText="Create a learner account" footerText="Already have an account?" footerCtaText="Sign in" onFooterCtaClick={navigateToSignInPage}>
      <SignUpLearnerForm/>
    </AuthPageLayout>
  );
}
