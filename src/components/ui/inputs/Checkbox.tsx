export function Checkbox({className, ...props}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="checkbox"
            className={`h-5 w-5 rounded border-gray-300 text-purple-700 focus:ring-accent-600 ${className}`}
            {...props}
        />
    )
}