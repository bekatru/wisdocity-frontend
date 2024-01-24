import { Checkbox, Label } from "components";

export function LabeledCheckbox({children, ...checkboxProps}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex items-center">
            <Checkbox {...checkboxProps} />
            <Label className="ml-3 font-normal">{children}</Label>
        </div>
    )
}