import { Checkbox } from "./Checkbox"
import { InputLabel } from "./InputLabel"

interface LabeledCheckboxProps {
    id: string
    labelText: string
}

export function LabeledCheckbox(props: LabeledCheckboxProps) {
    return (
        <div className="flex items-center">
            <Checkbox id={props.id} />
            <InputLabel text={props.labelText} className="ml-3 font-normal" />
        </div>
    )
}