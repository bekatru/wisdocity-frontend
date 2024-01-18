import { useState } from "react";
import { FormInput, LabeledCheckbox, Select } from "components";
import { AuthFormLayout } from "../layouts"

export function SignUpExpertForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [isSendEmailsChecked, setIsSendEmailsChecked] = useState(true);
  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] = useState(false);
  
  const handleSubmit = () => {
    console.log({
      name,
      email,
      password,
      country,
      isSendEmailsChecked,
      isTermsAndConditionsChecked, 
    })
  }

  return (
    <AuthFormLayout submitButtonText="Sign up" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          required
          autoComplete="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Email"
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          required
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Select
          label="Country"
          options={["United States", "Canada", "Mexico"]}
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <LabeledCheckbox
          checked={isSendEmailsChecked}
          onChange={(e) => setIsSendEmailsChecked(e.target.checked)}
        >
          Send me emails
        </LabeledCheckbox>
        <LabeledCheckbox
          required
          checked={isTermsAndConditionsChecked}
          onChange={(e) => setIsTermsAndConditionsChecked(e.target.checked)}
        >
          I agree with 
          {" "}<a className="text-purple-900 font-medium cursor-pointer">Terms of Service</a>,
          {" "}<a className="text-purple-900 font-medium cursor-pointer">User Agreement</a> and
          {" "}<a className="text-purple-900 font-medium cursor-pointer">Privacy Policy</a>
        </LabeledCheckbox>
    </AuthFormLayout>
  )
}