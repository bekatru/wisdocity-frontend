import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { Routes } from "modules/routing";
import { useProfile, useResendVerification, useChangeEmail, useAuthTokens } from "modules/auth";
import { Button, FormInput, Paragraph } from "components";
import { AuthFormLayout, AuthPageLayout } from "./layouts";



export function ChangeEmailPage() {
    const [helpSectionExpanded, setHelpSectionExpanded] = useState(false);

    const [email, setEmail] = useState("");

    const toggleHelpSection = () => {
        setHelpSectionExpanded(!helpSectionExpanded)
    }

    const { data } = useProfile();
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.is_verified) {
            navigate(Routes.App)
        }
    }, [data])

    const { setTokens} = useAuthTokens()

    const {mutate: sendVerification, isPending: isSendVerificationPending } = useResendVerification({
        onSuccess: (response) => {
            console.log(response);
            toast.success("Verification link sent");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Sending verification link failed")
        }
    })

    const {mutate: updateEmail, isPending: isUpdateEmailPending} = useChangeEmail({
        onSuccess: (response) => {
            toast.success("Success! Verification link sent to new email address");
            setTokens(response.access_token, response.refresh_token);
        },
        onError: (error) => {
            console.log(error);
            toast.error("Changing email adress failed");
        }
    })

    const handleSubmit = () => {
        sendVerification({});
    }

    const handleUpdateAndResendButtonClick = () => {
        console.log("Update and resend")
        if (email) {
            updateEmail({email});
        }
    }

    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="" footerCtaText="" onFooterCtaClick={() => { }}>
            <AuthFormLayout submitButtonText="Resend verification email" onSubmit={handleSubmit} isPending={isSendVerificationPending} isDisabled={isUpdateEmailPending}>
                <p className="text-center text-gray-500">
                    We just sent an email to the address: <span className="text-purple-900 font-medium">{data?.email}</span><br />
                    Please checkyour email and select the link provided to verify email.
                </p>
                <FormInput
                    label="Email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    disabled={isSendVerificationPending}
                    isPending={isUpdateEmailPending}
                    variant="outlined"
                    onClick={(e) => {e.preventDefault(); handleUpdateAndResendButtonClick()}}
                >
                    Update and resend
                </Button>
                <p
                    onClick={toggleHelpSection}
                    className="text-center text-purple-900 font-medium  cursor-pointer hover:underline"
                >
                    I need help verifying my email
                </p>
                <div className={`space-y-4 overflow-hidden ${helpSectionExpanded ? "h-fit" : "h-0"} text-center`}>
                    <p className="text-center">Why do we ask for email confirmation?</p>
                    <Paragraph>Email confirmation is an important security check that helps prevent other people from signing up for Wisdocity account using your email address.</Paragraph>
                    <p className="text-center">How do I confirm my email address?</p>
                    <Paragraph>We sent you an email with a link to click on. If you aren't able to click the link, copy the full URL from the email and paste it into a new web browser window.</Paragraph>
                    <p className="text-center">If you haven't received the confirmation email, please:</p>
                    <Paragraph>Check the junk mail folder or spam filter in your email account. Make sure your email address is entered correctly.</Paragraph>
                </div>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}