import { PropsWithChildren } from "react";

export function Header(props: PropsWithChildren) {
    return (
        <h1 className="text-2xl font-semibold">
            {props.children}
        </h1>
    )
}