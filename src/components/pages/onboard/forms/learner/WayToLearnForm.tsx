import {MultiSelect, MultiSelectProps} from "components"

interface WayToLearnFormProps extends MultiSelectProps {}


export function WayToLearnForm(props: WayToLearnFormProps) {
    return (
        <MultiSelect options={props.options} value={props.value} onChange={props.onChange} />
    )
}
