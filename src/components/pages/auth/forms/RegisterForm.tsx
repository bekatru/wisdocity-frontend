import { useState } from "react"
import { FormInput, LabeledCheckbox, Select } from "components";
import { AuthFormLayout } from "../layouts"
import { PasswordInput } from "components/ui/inputs/PasswordInput";

interface SignUpLearnerFormProps {
  onSubmit: (data: SignUpFields) => void
  isPending: boolean
}
export interface SignUpFields {
  name: string,
  email: string,
  password: string,
  country: string,
  isSendEmailsChecked: boolean
}
const countries = [
  "United States",
  "Canada",
  "Mexico",
]

export function RegisterForm(props: SignUpLearnerFormProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [isSendEmailsChecked, setIsSendEmailsChecked] = useState(true);

  const [hidePassword, setHidePassword] = useState(true);

  const onChangeHideTogglePassword = () => setHidePassword(prev => !prev)

  const handleSubmit = () => {
    props.onSubmit({
      name,
      email,
      password,
      country,
      isSendEmailsChecked,
    })
  }

  return (
    <AuthFormLayout fullWidthSubmitButton={false} isPending={props.isPending} submitButtonText="Sign up" onSubmit={handleSubmit}>
        <FormInput
          placeholder="Jenny Wilson"
          label="Name"
          required
          autoComplete="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          placeholder="example@email.com"
          label="Email"
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          onChangeHideTogglePassword={onChangeHideTogglePassword}
          hidePassword={hidePassword}
          placeholder="Create password (8 or more characters)"
          label="Password"
          required
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Select
          label="Country"
          required
          options={countries}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <LabeledCheckbox
          checked={isSendEmailsChecked}
          onChange={(e) => setIsSendEmailsChecked(e.target.checked)}
        >
          I’d like to stay connected. Send me Emails
        </LabeledCheckbox>
        <LabeledCheckbox
          required
        >
          I agree with 
          {" "}<a className="text-purple-900 font-medium cursor-pointer">Terms of Service</a>,
          {" "}<a className="text-purple-900 font-medium cursor-pointer">User Agreement</a> and
          {" "}<a className="text-purple-900 font-medium cursor-pointer">Privacy Policy</a>
        </LabeledCheckbox>
    </AuthFormLayout>
  )
}
