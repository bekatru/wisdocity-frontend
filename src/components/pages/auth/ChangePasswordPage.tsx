import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Routes } from 'modules/routing';
import { useChangePassword } from 'modules/auth';
import { AuthFormLayout, AuthPageLayout } from './layouts';
import { PasswordInput } from 'components/ui/inputs/PasswordInput';


export function ChangePasswordPage() {
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const onChangeHideTogglePassword = () => setHidePassword(prev => !prev)
  
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const resetPasswordToken = useMemo(() => searchParams.get('token'), [searchParams]);

    const { mutate: resetPassword, isPending } = useChangePassword({
        onSuccess: () => {
            toast.success("Password has been changed successfully", {
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
        <AuthPageLayout headerText="Change password" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open("mailto:support@wisdocity.ai")}>
            <AuthFormLayout submitButtonText="Submit" onSubmit={handleSubmit} isPending={isPending}>
                <p className="text-center text-gray-500">
                    Please enter your new password.
                </p>
                <PasswordInput
                    hidePassword={hidePassword}
                    onChangeHideTogglePassword={onChangeHideTogglePassword}
                    label="New password"
                    placeholder={"********"}
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
