import { Button } from "components";

interface AuthFormLayoutProps extends React.PropsWithChildren {
  submitButtonText: string;
  onSubmit: () => void;
  isPending: boolean;
  isDisabled?: boolean;
}

export function AuthFormLayout(props: AuthFormLayoutProps) {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit()
  }

    return(
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-6 sm:px-12">
        <form className="space-y-4" onSubmit={onFormSubmit}>
         {props.children}
         <Button disabled={props.isDisabled} isPending={props.isPending} type="submit">{props.submitButtonText}</Button>
        </form>
        </div>
      </div>
    )
}