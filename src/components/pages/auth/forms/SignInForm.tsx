import { useState } from "react";
import { FormInput, LabeledCheckbox } from "components";
import { AuthFormLayout } from "../layouts";


export function SignInForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    console.log({
      email,
      password,
    })
  }

  return (
    <AuthFormLayout submitButtonText="Sign up" onSubmit={handleSubmit}>
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