import { PropsWithChildren } from "react";

export function CenteredContainer(props: PropsWithChildren) {
    return (
        <div className="min-h-calc grow flex items-center justify-center">
            {props.children}
        </div>
    )
}