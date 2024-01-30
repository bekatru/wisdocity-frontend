import { Spinner, classNames } from "components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outlined";
    isPending?: boolean;
    fullWidth?: boolean;
}

const variantToStyleMap: { [key: string]: string } = {
    ["primary"]: "bg-purple-600 text-white",
    ["outlined"]: "text-purple-900 ring-1 ring-inset ring-purple-600 hover:bg-gray-50",
}

export function Button({ fullWidth = true, variant = "primary", isPending, children, disabled, className, ...props }: ButtonProps) {
    return (
        <button
            disabled={isPending || disabled}
            className={classNames(
                fullWidth && "w-full",
                variantToStyleMap[variant],
                "flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 text-nowrap",
                className,
            )}
            {...props}
        >
            {
                isPending 
                    ? <Spinner/>
                    : children
            }
        </button>
    )
}