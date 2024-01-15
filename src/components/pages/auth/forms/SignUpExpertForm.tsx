import { AuthFormLayout } from "../layouts"
import { EmailInput, NameInput, PasswordInput } from "./inputs"

export function SignUpExpertForm() {

  const handleSubmit = () => {
    // todo
  }

  return (
    <AuthFormLayout submitButtonText="Sign up" onSubmit={handleSubmit}>
      <NameInput />
      <EmailInput />
      <PasswordInput />
    </AuthFormLayout>
  )
}