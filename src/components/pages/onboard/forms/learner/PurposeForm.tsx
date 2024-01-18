import { Select } from "components";

interface PurposeFormProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

export function PurposeForm(props: PurposeFormProps) {
    return (
        <Select
            label="Purpose"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            options={props.options}
        />
    )
}