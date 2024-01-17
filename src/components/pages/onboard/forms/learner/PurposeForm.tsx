import { Select } from "components";
import { useState } from "react";

const options: string[] = [
    "Learning",
    "Other",
]

export function PurposeForm() {
    const [purpose, setPurpose] = useState(options[0])
    return (
        <Select
            label="Purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            options={["Learning"]}
        />
    )
}