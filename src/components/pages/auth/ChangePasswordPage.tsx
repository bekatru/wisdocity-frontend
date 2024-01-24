import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Routes } from 'modules/routing';
import { useChangePassword } from 'modules/auth';
import { FormInput } from 'components';
import { AuthFormLayout, AuthPageLayout } from './layouts';


export function ChangePasswordPage() {
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const resetPasswordToken = useMemo(() => searchParams.get('token'), [searchParams]);

    const { mutate: resetPassword, isPending } = useChangePassword({
        onSuccess: () => {
            toast.success("Change link sent successfuly", {
                onClose: () => navigate(Routes.SignIn)
            })
        },
        onError: (error) => {
            toast.error(error.response?.data.message);
        },
    })

    const handleSubmit = () => {
        if (resetPasswordToken) {
            resetPassword({ 
                password,
                token: resetPasswordToken, 
            })
        } else {
            toast.warn("Reset password token is missing.")
        }
 
    }

    return (
        <AuthPageLayout headerText="Change password" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open("mailto:help@wisdocity.ai")}>
            <AuthFormLayout submitButtonText="Change password" onSubmit={handleSubmit} isPending={isPending}>
                <p className="text-center text-gray-500">
                    Please enter your new password.
                </p>
                <FormInput
                    label="New password"
                    type="password"
                    required
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </AuthFormLayout>
        </AuthPageLayout>
    );
}
