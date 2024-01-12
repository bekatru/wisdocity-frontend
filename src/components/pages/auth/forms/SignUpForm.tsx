import { AuthFormLayout } from "../layouts/AuthFormLayout"
import { EmailInput } from "./inputs/EmailInput"
import { PasswordInput } from "./inputs/PasswordInput"
import { SubmitButton } from "./buttons/SubmitButton"

export function SignUpForm() {
  return (
    <AuthFormLayout>
      <form className="space-y-6" method="POST">
        <EmailInput />
        <PasswordInput />
        <SubmitButton text="Sign up" />
      </form>
    </AuthFormLayout>
  )
}