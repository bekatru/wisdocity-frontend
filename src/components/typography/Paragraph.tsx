import { PropsWithChildren } from "react";

export function Paragraph(props: PropsWithChildren) {
    return (
        <p className="text-sm leading-5 text-gray-500">
            {props.children}
        </p>
    )
}