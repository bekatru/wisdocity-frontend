import { Paragraph, ShadowBox } from "components";

export function VerificationHelp() {
    return (
        <ShadowBox className={`space-y-4 text-center`}>
            <p className="text-center">Why do we ask for email confirmation?</p>
            <Paragraph>
                Email confirmation is an important security check that helps prevent other people from signing up for Wisdocity account using your email address.
            </Paragraph>
            <p className="text-center">How do I confirm my email address?</p>
            <Paragraph>
                We sent you an email with a link to click on. If you aren't able to click the link, copy the full URL from the email and paste it into a new web browser window.
            </Paragraph>
            <p className="text-center">If you haven't received the confirmation email, please:</p>
            <Paragraph>
                Check the junk mail folder or spam filter in your email account. Make sure your email address is entered correctly.
            </Paragraph>
        </ShadowBox>
    )
}