import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { Routes } from "modules/routing";
import { useProfile, useResendVerification, useChangeEmail, useAuthTokens } from "modules/auth";
import { Button, FormInput, Modal, VerificationHelp } from "components";
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
    }, [data?.is_verified])

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
                <Modal isOpen={helpSectionExpanded} closeModal={toggleHelpSection}>
                    <VerificationHelp onResendEmailClick={handleUpdateAndResendButtonClick} verificationEmail={email}/>
                </Modal>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}