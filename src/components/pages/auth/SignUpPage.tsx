import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Routes } from 'modules/routing/types';
import { useAuthTokens, useSignUp } from 'modules/auth/hooks';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';


export function SignUpPage() {

  const navigate = useNavigate();
  const { role } = useParams();

  const navigateToSignInPage = () => navigate(Routes.SignIn);
  const { setTokens } = useAuthTokens()

  const { mutate: mutateLogin, isPending } = useSignUp({
    onSuccess: (response) => {
      setTokens(response.token.access, response.token.refresh);
      toast.success("Signed up successfuly")
      navigate(Routes.Welcome)
    },
    onError: (error) => {
      toast.error(error.response?.data.message)
    },
  });

  const handleSubmit = (data: any) => {
    mutateLogin({
      full_name: data.name,
      email: data.email,
      password: data.password,
      country: data.country,
      isSendMessage: data.isSendEmailsChecked,
      current_role: role?.toUpperCase() ?? "",
    })
  };

  return (
    <AuthPageLayout
      headerText="Create a learner account"
      footerText="Already have an account?"
      footerCtaText="Sign in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm onSubmit={handleSubmit} isPending={isPending} />
    </AuthPageLayout>
  );
}
