import { useNavigate, useParams } from 'react-router-dom';
import { Routes } from 'modules/routing';
import { Roles, useRegisterFlow } from 'modules/auth';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';

const textMap = {
  [Roles.Expert]: "Create an expert account",
  [Roles.Learner]: "Create a learner account",
}

export function SignUpPage() {

  const params = useParams();

  const navigate = useNavigate();

  const navigateToSignInPage = () => navigate(Routes.SignIn);
  
  const flow = useRegisterFlow(params.role as Roles);

  return (
    <AuthPageLayout
      headerText={textMap[params.role as Roles]}
      footerText="Already have an account?"
      footerCtaText="Sign in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm onSubmit={flow.submitForm} isPending={flow.isPending} />
    </AuthPageLayout>
  );
}
