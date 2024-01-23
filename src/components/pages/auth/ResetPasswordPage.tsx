import { useResetPassword } from 'modules/auth/hooks';
import { AuthFormLayout, AuthPageLayout } from './layouts';
import { FormInput } from 'components';
import { toast } from 'react-toastify';
import { useState } from 'react';


export function ResetPasswordPage() {
    const [email, setEmail] = useState("");

    const { mutate: resetPassword, isPending } = useResetPassword({
        onSuccess: () => {
            toast.success("Reset link sent successfuly")
        },
        onError: (error) => {
            toast.error(error.response?.data.message);
        },
    })

    const handleSubmit = () => {
        resetPassword({ email })
    }

    return (
        <AuthPageLayout headerText="Reset password" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open("mailto:help@wisdocity.ai")}>
            <AuthFormLayout submitButtonText="Submit" onSubmit={handleSubmit} isPending={isPending}>
                <p className="text-center text-gray-500">
                    Please enter your email adress. <br />
                    We will send a reset password link to your email.
                </p>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </AuthFormLayout>
        </AuthPageLayout>
    );
}
