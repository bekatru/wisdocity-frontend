import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Routes } from "modules/routing";
import { useProfile, useResendVerification } from "modules/auth";
import { AuthPageLayout, AuthFormLayout } from "./layouts";
import { Modal, Paragraph, VerificationHelp } from "components";

export function VerificationPage() {
    const [helpSectionExpanded, setHelpSectionExpanded] = useState(false);

    const navigate = useNavigate();

    const { data } = useProfile()

    const { mutate: resendVerification, isPending } = useResendVerification({
        onSuccess: (reponse) => {
            console.log(reponse);
            toast.success("Verification link sent")
        },
        onError: (error) => {
            console.error(error)
            toast.error("Sending verification link failed")
        }
    })


    const toggleHelpSection = () => {
        setHelpSectionExpanded(!helpSectionExpanded)
    }

    const navigateToChangeEmailPage = () => {
        navigate(Routes.ChangeEmail)
    }

    const handleSubmit = () => {
        resendVerification({});
    }

    useEffect(() => {
        if (data?.is_verified) {
            navigate(Routes.App);
        }
    }, [data?.is_verified])

    if (data?.is_verified) {
        return (

            <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
                <h1 className="text-purple-900 font-semibold text-3xl text-center">
                    Email verified successfully!
                </h1>
                <p className="text-gray-400 text-center max-w-lg">
                    You may safely close this tab
                </p>
            </div>
        )
    }

    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="" footerCtaText="" onFooterCtaClick={() => { }}>
            <AuthFormLayout submitButtonText="Resend verification email" onSubmit={handleSubmit} isPending={isPending}>
                <div className="space-y-4 flex flex-col items center">
                    <Paragraph className="text-center text-gray-500 sm:text-nowrap">
                        We just sent an email to the address: <span className="text-purple-900 font-medium">{data?.email}</span><br />
                        Please checkyour email and select the link provided to verify email.
                    </Paragraph>
                    <button
                        type="button"
                        onClick={navigateToChangeEmailPage}
                        className="text-center text-purple-900 font-medium cursor-pointer hover:underline"
                    >
                        Change email
                    </button>
                    <button
                        type="button"
                        onClick={toggleHelpSection}
                        className="text-center text-purple-900 font-medium  cursor-pointer hover:underline"
                    >
                        I need help verifying my email
                    </button>
                </div>
                <Modal isOpen={helpSectionExpanded} closeModal={toggleHelpSection}>
                    <VerificationHelp />
                </Modal>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}