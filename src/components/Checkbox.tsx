export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-accent-600 focus:ring-accent-600"
            {...props}
        />
    )
}