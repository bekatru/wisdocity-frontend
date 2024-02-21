import classNames from "classnames";
import { Roles } from "modules/auth";
import { RadioButton } from "components";

interface RoleSelectionElementProps {
    role: Roles;
    selected: boolean;
    onClick: (role: Roles) => void;
}

const textMap = {
    [Roles.Learner]: "Start learning",
    [Roles.Expert]: "Share my Wisdom",
}

export function RoleSelectionElement(props: RoleSelectionElementProps) {

    return (
        <div
            onClick={() => props.onClick(props.role)}
            className={classNames("w-full relative text-center text-nowrap text-gray-400 px-5 py-5  rounded-2xl border border-gray-400 cursor-pointer", { "border-purple-700 bg-purple-100 text-purple-800": props.selected })}>

            <RadioButton
                type={'radio'}
                readOnly
                checked={props.selected}
                className="absolute top-2 right-2"
            />

            {textMap[props.role]}

        </div>
    )
}
