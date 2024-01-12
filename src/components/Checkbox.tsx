interface CheckboxProps {
    id: string
}

export function Checkbox(props: CheckboxProps) {
    return (
        <input
            id={props.id}
            name={props.id}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-accent-600 focus:ring-accent-600"
        />
    )
}