import { Button } from "components";

interface AuthFormLayoutProps extends React.PropsWithChildren {
  submitButtonText: string;
  onSubmit: () => void;
  isPending?: boolean;
  isDisabled?: boolean;
}

export function AuthFormLayout(props: AuthFormLayoutProps) {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit()
  }

    return(
        <form className="space-y-4 min-w-64 sm:min-w-[512px]" onSubmit={onFormSubmit}>
         {props.children}
         <Button disabled={props.isDisabled} isPending={props.isPending} type="submit">{props.submitButtonText}</Button>
        </form>
    )
}