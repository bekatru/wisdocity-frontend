import { useState } from "react";
import { AuthFormLayout, AuthPageLayout } from "./layouts";
import { Button, FormInput } from "components";



export function UpdateEmailPage() {
    const [helpSectionExpanded, setHelpSectionExpanded] = useState(false);

    const [email, setEmail] = useState("");

    const toggleHelpSection = () => {
        setHelpSectionExpanded(!helpSectionExpanded)
    }

    const handleSubmit = () => {
        console.log("Resend verification")
    }

    const handleUpdateAndResendButtonClick = () => {
        console.log("Update and resend")
    }

    return (
        <AuthPageLayout headerText="Verify your email to continue" footerText="" footerCtaText="" onFooterCtaClick={() => { }}>
            <AuthFormLayout submitButtonText="Resend verification email" onSubmit={handleSubmit}>
                <p className="text-center text-gray-500">
                    We just sent an email to the address: <span className="text-indigo-900 font-medium">example@gmail.com</span><br />
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
                    variant="outlined"
                    onClick={handleUpdateAndResendButtonClick}
                >
                    Update and resend
                </Button>
                <p
                    onClick={toggleHelpSection}
                    className="text-center text-indigo-900 font-medium  cursor-pointer hover:underline"
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