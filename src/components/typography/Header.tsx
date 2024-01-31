import { PropsWithChildren } from "react";

export function Header(props: PropsWithChildren) {
    return (
        <h1 className="text-2xl font-semibold text-center text-[#321841]">
            {props.children}
        </h1>
    )
}