import { AuthPageFooter } from "./sections/AuthPageFooter";
import { AuthPageHeader } from "./sections/AuthPageHeader";
import { AuthPageLayout } from "./layouts/AuthPageLayout";
import { SignInForm } from "./forms/SignInForm";

export function SignInPage() {
  return (
    <AuthPageLayout>
      <AuthPageHeader text="Sign in to your account" />
      <SignInForm />
      <AuthPageFooter text="Not a member?" ctaText="Sign up" />
    </AuthPageLayout>
  )
}