import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Routes } from "modules/routing";
import { useVerifyAccount } from "modules/auth";
import { AuthPageLayout, AuthFormLayout } from "./layouts";

export function VerifyAndContinuePage() {
    const [searchParams] = useSearchParams()
    const verificationToken = useMemo(() => searchParams.get("token"), [])

    const navigate = useNavigate()

    const {mutate: verifyEmail, isPending, isSuccess} = useVerifyAccount({
        onSuccess: () => {
            toast.success(
                "Email successfully verified! You will be redirected automatically.", 
                { onClose: () => navigate(Routes.App) }
            );
        },
        onError: (error) => {
            console.error(error);
            toast.error("Email verification failed");
            toast.error(error.response?.data.message);
        }
    })

    const handleSubmit = () => {
        if (verificationToken) {
            verifyEmail({token: verificationToken})
        } 
    }
    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open('mailto:help@wisdocity.ai')}>
            <AuthFormLayout submitButtonText={isSuccess ? "Verified" : "Verify"} onSubmit={handleSubmit} isPending={isPending} isDisabled={isSuccess}>
                <p className="text-center text-gray-500">
                    Please, click Verify to confirm your email adress.
                </p>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}