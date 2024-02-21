import { useState } from 'react';
import { toast } from 'react-toastify';
import { useResetPassword } from 'modules/auth';
import { FormInput } from 'components';
import { AuthFormLayout, AuthPageLayout } from './layouts';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'modules/routing';


export function ResetPasswordPage() {
    const navigate = useNavigate();

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
        <AuthPageLayout headerText="Reset password" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open("mailto:support@wisdocity.ai")}>
            <AuthFormLayout secondaryCtaText={'Return to Log in'} onScondaryCtaClick={() => navigate(Routes.SignIn)} fullWidthSubmitButton={true} submitButtonText="Submit" onSubmit={handleSubmit} isPending={isPending}>
                <p className="text-center text-gray-500">
                    Please enter your email adress. <br />
                    We will send a reset password link to your email.
                </p>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={"example@email.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
            </AuthFormLayout>
        </AuthPageLayout>
    );
}
