import { useNavigate, useParams } from 'react-router-dom';
import { Routes } from 'modules/routing';
import { Roles, useRegisterFlow } from 'modules/auth';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';


export function SignUpPage() {

  const params = useParams();

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);
  
  const flow = useRegisterFlow(params.role as Roles);

  return (
    <AuthPageLayout
      headerText={<p className={"font-semibold"}>Begin your journey<br/>by creating an account</p>}
      footerText="Already have an account?"
      footerCtaText="Log in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm onSubmit={flow.submitForm} isPending={flow.isPending} />
    </AuthPageLayout>
  );
}
