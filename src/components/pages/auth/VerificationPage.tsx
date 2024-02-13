import { useState } from "react";
import { useVerificationFlow } from "modules/auth";
import { Modal, Paragraph, VerificationHelp } from "components";
import { AuthPageLayout, AuthFormLayout } from "./layouts";

export function VerificationPage() {
    const [helpSectionExpanded, setHelpSectionExpanded] = useState(false);

    const toggleHelpSection = () => {
        setHelpSectionExpanded(!helpSectionExpanded)
    }

    const flow = useVerificationFlow();

    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="" footerCtaText="" onFooterCtaClick={() => { }}>
            <AuthFormLayout submitButtonText="Resend verification email" onSubmit={flow.resendVerification} isPending={flow.isPending}>
                <div className="space-y-4 flex flex-col items center">
                    <Paragraph className="text-center text-gray-500 sm:text-nowrap">
                        We just sent an email to the address: <span className="text-purple-900 font-medium">{flow.verificationEmail}</span><br />
                        Please checkyour email and select the link provided to verify email.
                    </Paragraph>
                    <button
                        type="button"
                        onClick={flow.navigateToChangeEmailPage}
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