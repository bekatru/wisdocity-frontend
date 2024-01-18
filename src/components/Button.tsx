interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outlined";
}

const variantToStyleMap: {[key: string]: string} = {
    ["primary"]: "bg-purple-600 text-white",
    ["outlined"]: "text-purple-900 ring-1 ring-inset ring-purple-600 hover:bg-gray-50",
}

export function Button({variant = "primary", ...props}: ButtonProps) {
    return (
        <button
            className={`${variantToStyleMap[variant]} flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600`}
            {...props}
        />
    )
}