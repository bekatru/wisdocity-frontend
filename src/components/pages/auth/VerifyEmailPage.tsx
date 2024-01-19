import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "modules/routing/types";
import { AuthPageLayout, AuthFormLayout } from "./layouts";
import { useAuth } from "modules/auth/hooks/useAuth";
import { useSendVerification } from "modules/auth/hooks/useSendVerification";

export function VerifyEmailPage() {
    const [helpSectionExpanded, setHelpSectionExpanded] = useState(false);
    
    const navigate = useNavigate();

    const {data} = useAuth()

    const {mutate: resendVerification} = useSendVerification({
        onSuccess: (reponse) => {
            console.log(reponse)
        },
        onError: (error) => {
            console.error(error)
        }
    })

    useEffect(() => {
        if (data?.user.is_verified) {
            navigate(Routes.Root);
        }
    }, [data])

    const toggleHelpSection = () => {
        setHelpSectionExpanded(!helpSectionExpanded)
    }

    const navigateToChangeEmailPage = () => {
        navigate(Routes.ChangeEmail)
    }

    const handleSubmit = () => {
        if (data?.user.email) {
            resendVerification({email: data.user.email});
        }
    }

    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="" footerCtaText="" onFooterCtaClick={() => { }}>
            <AuthFormLayout submitButtonText="Resend verification email" onSubmit={handleSubmit}>
                <p className="text-center text-gray-500">
                    We just sent an email to the address: <span className="text-purple-900 font-medium">{data?.user.email}</span><br />
                    Please checkyour email and select the link provided to verify email.
                </p>
                <p
                    onClick={navigateToChangeEmailPage}
                    className="text-center text-purple-900 font-medium cursor-pointer hover:underline"
                >
                    Change email
                </p>
                <p
                    onClick={toggleHelpSection}
                    className="text-center text-purple-900 font-medium  cursor-pointer hover:underline"
                >
                    I need help verifying my email
                </p>
                <div className={`space-y-4 overflow-hidden ${helpSectionExpanded ? "h-fit" : "h-0"}`}>
                    <p className="text-center font-medium">Why do we ask for email confirmation?</p>
                    <p className="text-center text-gray-500">Email confirmation is an important security check that helps prevent other people from signing up for Wisdocity account using your email address.</p>
                    <p className="text-center font-medium">How do I confirm my email address?</p>
                    <p className="text-center text-gray-500">We sent you an email with a link to click on. If you aren't able to click the link, copy the full URL from the email and paste it into a new web browser window.</p>
                    <p className="text-center font-medium">If you haven't received the confirmation email, please:</p>
                    <p className="text-center text-gray-500">Check the junk mail folder or spam filter in your email account. Make sure your email address is entered correctly.</p>
                </div>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}