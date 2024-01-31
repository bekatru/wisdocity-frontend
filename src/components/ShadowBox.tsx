import { PropsWithChildren } from "react";

export function ShadowBox(props: PropsWithChildren) {
    return (
        <div className="bg-white shadow sm:rounded-2xl grow">
            <div className="p-6 sm:p-6">{props.children}</div>
        </div>
    )
}