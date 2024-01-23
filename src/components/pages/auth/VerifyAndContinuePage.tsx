import { AuthPageLayout, AuthFormLayout } from "./layouts";
import { useVerifyEmail } from "modules/auth/hooks";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export function VerifyAndContinuePage() {
    const [searchParams] = useSearchParams()
    const verificationToken = useMemo(() => searchParams.get("token"), [])

    const {mutate: verifyEmail, isPending} = useVerifyEmail({
        onSuccess: () => {
            toast.success(
                "Email successfully verified! This page will close automatically.", 
                { onClose: () => window.close() }
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
            <AuthFormLayout submitButtonText="Verify and continue" onSubmit={handleSubmit} isPending={isPending}>
                <p className="text-center text-gray-500">
                    Please, click Verify to confirm your email adress.
                </p>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}