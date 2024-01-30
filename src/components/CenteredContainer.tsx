import { PropsWithChildren } from "react";

export function CenteredContainer(props: PropsWithChildren) {
    return (
        <div className="h-full flex items-center justify-center">
            {props.children}
        </div>
    )
}