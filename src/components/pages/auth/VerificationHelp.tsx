import { Button, Header, Paragraph, ShadowBox } from "components";

interface VerificationHelpProps {
    verificationEmail: string | undefined,
    onResendEmailClick: () => void,
}
export function VerificationHelp(props: VerificationHelpProps) {
    return (
        <ShadowBox className={`space-y-4 text-center`}>
            <Header>Email Verification</Header>
            <p className="text-center font-semibold">How do I verify my email?</p>
            <Paragraph>
                Click the link that we emailed to <span className={"text-purple-700"}>{props.verificationEmail}</span>. If you're unable to do so, copy the full URL and paste it into a new browser window.
            </Paragraph>
            <p className="text-center font-semibold">I haven’t received the email verification link.</p>
            <Paragraph>
                Check your junk mail folder or spam filter in your email account, ensure your email address is entered correctly, or click the Resend Verification Email link below.
            </Paragraph>
            <p className="text-center font-semibold">Why do you ask for email verification?</p>
            <Paragraph>
                Email verification is an important security check that helps prevent others from signing up using email address.
            </Paragraph>
            <Button onClick={props.onResendEmailClick}>Resend verification email</Button>
        </ShadowBox>
    )
}