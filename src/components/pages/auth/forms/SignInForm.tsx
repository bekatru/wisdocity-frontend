import { LabeledCheckbox } from "../../../LabeledCheckbox";
import { AuthFormLayout } from "../layouts";
import { PasswordInput, EmailInput } from "./inputs";


export function SignInForm() {

  const handleSubmit = () => {
    // todo
  }

  return (
    <AuthFormLayout submitButtonText="Sign in" onSubmit={handleSubmit}>
        <EmailInput />
        <PasswordInput />
        <div className="flex items-center justify-between">
          <LabeledCheckbox id="remember-me">Remember me</LabeledCheckbox>
          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-accent-600 hover:text-accent-500">
              Forgot password?
            </a>
          </div>
        </div>
    </AuthFormLayout>
    )
}