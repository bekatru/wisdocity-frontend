import { AuthFormLayout } from "../layouts/AuthFormLayout";
import { EmailInput } from "./inputs/EmailInput";
import { LabeledCheckbox } from "../../../LabeledCheckbox";
import { PasswordInput } from "./inputs/PasswordInput";
import { SubmitButton } from "./buttons/SubmitButton";

export function SignInForm() {
  return (
    <AuthFormLayout>
      <form className="space-y-6" action="#" method="POST">
        <EmailInput />
        <PasswordInput />
        <div className="flex items-center justify-between">
          <LabeledCheckbox id="remember-me" labelText="Remember me"/>
          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-accent-600 hover:text-accent-500">
              Forgot password?
            </a>
          </div>
        </div>
        <SubmitButton text="Sign in" />
      </form>
    </AuthFormLayout>
    )
}