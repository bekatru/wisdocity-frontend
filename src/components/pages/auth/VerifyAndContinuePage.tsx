import { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Routes } from "modules/routing";
import { useVerifyAccount } from "modules/auth";
import { AuthPageLayout } from "./layouts";
import { Paragraph, Spinner } from "components";

export function VerifyAndContinuePage() {
    const [searchParams] = useSearchParams()
    const verificationToken = useMemo(() => searchParams.get("token"), [])

    const navigate = useNavigate()

    const {mutate: verifyEmail} = useVerifyAccount({
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

    useEffect(() => {
        handleSubmit()
    }, [])

    return (
        <AuthPageLayout headerText="Email verification" footerText="Need help?" footerCtaText="Contact us" onFooterCtaClick={() => window.open('mailto:support@wisdocity.ai')}>
            <Paragraph className="text-center">Please wait while we verify your email</Paragraph>
            <div className="flex justify-center text-purple-500">
                <Spinner/>
            </div>
        </AuthPageLayout>
    )
}