export function Checkbox({className, ...props}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="checkbox"
            className={`h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-accent-600 ${className}`}
            {...props}
        />
    )
}