import { useNavigate } from 'react-router-dom';
import { Routes } from 'modules/routing';
import { useLoginFlow } from 'modules/auth';
import { AuthPageLayout } from './layouts';
import { SignInForm } from './forms';


export function SignInPage() {

  const navigate = useNavigate();
  const navigateToSignUpPage = () => navigate(Routes.Register);

  const flow = useLoginFlow();

  return (
    <AuthPageLayout
      headerText="Sign in to Wisdocity"
      secondaryText={"Our vibrant community awaits!"}
      footerText="Not a member?"
      footerCtaText="Sign up"
      onFooterCtaClick={navigateToSignUpPage}>
      <SignInForm
        onSubmit={flow.submitForm}
        isPending={flow.isPending} />
    </AuthPageLayout>
  );
}
