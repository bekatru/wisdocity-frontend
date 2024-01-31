import { useState } from "react";
import { useNavigate } from "react-router";
import { Routes } from "modules/routing";
import { FormInput, LabeledCheckbox } from "components";
import { AuthFormLayout } from "../layouts";

interface SignInFormProps {
  onSubmit: (data: any) => void;
  isPending: boolean;
}

export function LoginForm(props: SignInFormProps) {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    props.onSubmit({
      email,
      password,
    })
  }

  return (
    <AuthFormLayout submitButtonText="Sign in" onSubmit={handleSubmit} isPending={props.isPending}>
        <FormInput
          placeholder="example@email.com"
          label="Email"
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          placeholder="********"
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
            <a onClick={() => navigate(Routes.ResetPassword)} className="font-semibold text-accent-600 hover:text-accent-500 hover:underline cursor-pointer text-purple-900">
              Forgot password?
            </a>
          </div>
        </div>
    </AuthFormLayout>
  )

}