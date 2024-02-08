import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Routes } from 'modules/routing';
import { useAuthTokens, useRegister } from 'modules/auth';
import { AuthPageLayout } from './layouts';
import { SignUpLearnerForm } from './forms';
import { SignUpPayload } from 'modules/auth/api';


export function SignUpPage() {

  const navigate = useNavigate();
  const { role } = useParams();

  const navigateToSignInPage = () => navigate(Routes.SignIn);
  const { setTokens } = useAuthTokens()

  const { mutate: mutateLogin, isPending } = useRegister({
    onSuccess: (response) => {
      setTokens(response.access_token, response.refresh_token);
      toast.success("Signed up successfuly")
      navigate(Routes.Welcome)
    },
    onError: (error) => {
      toast.error(error.response?.data.message)
    },
  });

  const handleSubmit = (data: SignUpPayload & {isSendEmailsChecked: boolean}) => {
    if (!role) throw new Error("Role is missing!");
    console.log(data, 'data')
    mutateLogin({
      name: data.name,
      email: data.email,
      password: data.password,
      country: data.country,
      is_subscribed: data.isSendEmailsChecked,
      current_role: role,
    })
  };

  return (
    <AuthPageLayout
      headerText={`Create ${role === "learner" ? "a" : "an"} ${role} account`}
      footerText="Already have an account?"
      footerCtaText="Sign in"
      onFooterCtaClick={navigateToSignInPage}
    >
      <SignUpLearnerForm onSubmit={handleSubmit} isPending={isPending} />
    </AuthPageLayout>
  );
}
