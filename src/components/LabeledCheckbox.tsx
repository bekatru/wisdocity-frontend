import { Checkbox } from "./Checkbox"
import { InputLabel } from "./InputLabel"

interface LabeledCheckboxProps extends React.PropsWithChildren {
    id: string
}

export function LabeledCheckbox(props: LabeledCheckboxProps) {
    return (
        <div className="flex items-center">
            <Checkbox id={props.id} />
            <InputLabel className="ml-3 font-normal">{props.children}</InputLabel>
        </div>
    )
}