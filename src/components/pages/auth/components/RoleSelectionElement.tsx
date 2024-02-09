import classNames from "classnames";
import { Roles } from "modules/auth";
import { Checkbox } from "components";

interface RoleSelectionElementProps {
    role: Roles;
    selected: boolean;
    onClick: (role: Roles) => void;
}

const textMap = {
    [Roles.Learner]: "Join as a learner",
    [Roles.Expert]: "Join as an expert",
}

export function RoleSelectionElement(props: RoleSelectionElementProps) {

    return (
        <div
            onClick={() => props.onClick(props.role)}
            className={classNames("relative text-center text-nowrap text-gray-400 p-5 sm:p-8 rounded-2xl border border-gray-400 cursor-pointer", { "border-purple-600 bg-gray-100 text-purple-600": props.selected })}>

            <Checkbox
                readOnly
                checked={props.selected}
                className="absolute top-2 right-2 rounded"/>

            {textMap[props.role]}

        </div>
    )
}
