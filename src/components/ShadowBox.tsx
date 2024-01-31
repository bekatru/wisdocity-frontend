import { PropsWithChildren } from "react";

export function ShadowBox(props: PropsWithChildren) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg grow">
            <div className="px-4 py-5 sm:p-6">{props.children}</div>
        </div>
    )
}