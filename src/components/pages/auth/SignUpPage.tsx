import { AuthPageFooter } from "./sections/AuthPageFooter";
import { AuthPageHeader } from "./sections/AuthPageHeader";
import { AuthPageLayout } from "./layouts/AuthPageLayout";
import { SignUpForm } from "./forms/SignUpForm";

export function SignUpPage() {
    return (
        <AuthPageLayout>
            <AuthPageHeader text="Sign up to your account" />
            <SignUpForm />
            <AuthPageFooter text="Already have an account?" ctaText="Sign in" />
        </AuthPageLayout>
    )
}