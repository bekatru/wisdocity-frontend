import { Spinner, classNames } from "components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outlined" | "text";
    isPending?: boolean;
    fullWidth?: boolean;
}

const variantToStyleMap: { [key: string]: string } = {
    ["primary"]: "hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 shadow-sm bg-purple-700 text-white",
    ["outlined"]: "hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 shadow-sm text-purple-900 ring-1 ring-inset ring-purple-700 hover:bg-gray-50",
    ["text"]: "hover:underline",
}

export function Button({ fullWidth = true, variant = "primary", isPending, children, disabled, className, ...props }: ButtonProps) {
    return (
        <button
            disabled={isPending || disabled}
            className={classNames(
                fullWidth && "w-full",
                variantToStyleMap[variant],
                "flex items-center justify-center rounded-[60px] px-3 py-1.5 text-sm font-semibold leading-6 text-nowrap",
                (disabled && variant === 'outlined') && "ring-slate-500 text-slate-600 hover:bg-inherit",
                (disabled && variant === 'primary') && "bg-[#E5E5E5] text-[#969696]",
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