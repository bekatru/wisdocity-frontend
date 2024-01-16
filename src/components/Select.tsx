import { InputLabel } from './InputLabel'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
}

export function Select({ label, options, ...props }: SelectProps) {

    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <select
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...props}
            >
                {options.map((value) => <option key={value}>{value}</option>)}
            </select>
        </div>
    )
}