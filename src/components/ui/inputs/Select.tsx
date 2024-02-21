import { Label } from "components";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
}

export function Select({ label, options, ...props }: SelectProps) {

    return (
        <div>
            <Label>{label}</Label>
            <select
                className="mt-2 block w-full h-11 rounded-xl border-0 py-1.5 pl-3 pr-10 text-gray-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6"
                {...props}
            >
                {options.map((value) => <option key={value}>{value}</option>)}
            </select>
        </div>
    )
}