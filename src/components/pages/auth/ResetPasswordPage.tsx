import {AuthFormLayout, AuthPageLayout} from './layouts';
import { FormInput } from 'components';


export function ResetPasswordPage() {


//   const {mutate: mutateSignIn, isPending} = useSignIn({
//     onSuccess: (response) => {
//       setTokens(response.access_token, response.refresh_token);
//       toast.success("Signed in successfuly")
//       navigate(Routes.App);
//     },
//     onError: (error) => {
//       toast.error(error.response?.data.message);
//     },
//   })

  const handleSubmit = () => {
    // mutateSignIn({
    //   email: data.email,
    //   password: data.password,
    // })
  }

  return (
    <AuthPageLayout headerText="Reset password" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open("mailto:help@wisdocity.ai")}>
        <AuthFormLayout submitButtonText="Submit" onSubmit={handleSubmit}>
        <p className="text-center text-gray-500">
                    Please enter your email adress. <br/>
                    We will send a reset password link to your email.
                </p>
                <FormInput label="Email" />
        </AuthFormLayout>
    </AuthPageLayout>
  );
}
