import { useState } from "react";
import { useNavigate } from "react-router";
import { Routes } from "modules/routing";
import { FormInput, LabeledCheckbox, PasswordInput } from "components";
import { AuthFormLayout } from "../layouts";
import { SignInPayload } from "modules/auth";

interface SignInFormProps {
  onSubmit: (data: SignInPayload) => void;
  isPending: boolean;
}

export function LoginForm(props: SignInFormProps) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const onChangeHideTogglePassword = () => setHidePassword(prev => !prev);

  const handleSubmit = () => {
    props.onSubmit({
      email,
      password,
    })
  }

  return (
    <AuthFormLayout submitButtonText="Log in" onSubmit={handleSubmit} isPending={props.isPending}>
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
          hidePassword={hidePassword}
          onChangeHideTogglePassword={onChangeHideTogglePassword}
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
