import { Button, classNames } from "components";

interface AuthFormLayoutProps extends React.PropsWithChildren {
  submitButtonText: string;
  onSubmit: () => void;
  isPending?: boolean;
  isDisabled?: boolean;
  fullWidthSubmitButton?: boolean,
  secondaryCtaText?: string,
  onScondaryCtaClick?: () => void,
}

export function AuthFormLayout(props: AuthFormLayoutProps) {
  const {fullWidthSubmitButton=true}=props;

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit()
  }

    return(
        <form className="space-y-4 min-w-64 sm:min-w-[512px]" onSubmit={onFormSubmit}>
          {props.children}
          <Button className={classNames("py-2", fullWidthSubmitButton ? 'w-full' : "w-3/4 mx-auto")} fullWidth={false} disabled={props.isDisabled} isPending={props.isPending} type="submit">{props.submitButtonText}</Button>
          {
            (props.onScondaryCtaClick && props.secondaryCtaText)
            &&
            <p onClick={props.onScondaryCtaClick} className={"text-purple-700 text-center underline cursor-pointer"}>{props.secondaryCtaText}</p>
          }
        </form>
    )
}