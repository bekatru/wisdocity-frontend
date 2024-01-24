import { Checkbox } from "./Checkbox"
import { Label } from "../shared/Label"

export function LabeledCheckbox({children, ...checkboxProps}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex items-center">
            <Checkbox {...checkboxProps} />
            <Label className="ml-3 font-normal">{children}</Label>
        </div>
    )
}