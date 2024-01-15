import { SubmitButton } from "../forms/buttons"

interface AuthFormLayoutProps extends React.PropsWithChildren {
  submitButtonText: string;
  onSubmit: () => void;
}

export function AuthFormLayout(props: AuthFormLayoutProps) {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit()
  }

    return(
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-6 sm:px-12">
        <form className="space-y-8" onSubmit={onFormSubmit}>
         {props.children}
         <SubmitButton text={props.submitButtonText} />
        </form>
        </div>
      </div>
    )
}