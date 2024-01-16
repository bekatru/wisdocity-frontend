import { Checkbox } from "./Checkbox"
import { InputLabel } from "./InputLabel"

export function LabeledCheckbox({children, ...checkboxProps}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex items-center">
            <Checkbox {...checkboxProps} />
            <InputLabel className="ml-3 font-normal">{children}</InputLabel>
        </div>
    )
}