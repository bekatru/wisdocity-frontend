import { LabeledCheckbox } from "../../../LabeledCheckbox"
import { AuthFormLayout } from "../layouts"
import { CountrySelect, EmailInput, NameInput, PasswordInput } from "./inputs"

export function SignUpLearnerForm() {
  
  const handleSubmit = () => {
    // todo
  }
  return (
    <AuthFormLayout submitButtonText="Sign up" onSubmit={handleSubmit}>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <CountrySelect />
        <LabeledCheckbox id="send-emails">{"Send me emails"}</LabeledCheckbox>
        <LabeledCheckbox id="terms-and-conditions">
          I agree with 
          {" "}<a className="text-indigo-900 font-medium cursor-pointer">Terms of Service</a>,
          {" "}<a className="text-indigo-900 font-medium cursor-pointer">User Agreement</a> and
          {" "}<a className="text-indigo-900 font-medium cursor-pointer">Privacy Policy</a>
        </LabeledCheckbox>
    </AuthFormLayout>
  )
}