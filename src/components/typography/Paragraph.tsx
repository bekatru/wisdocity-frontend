import classNames from "classnames";
import { PropsWithChildren } from "react";

export function Paragraph({className, ...props}: React.HTMLAttributes<HTMLParagraphElement> & PropsWithChildren) {
    return (
        <p className={classNames("text-sm leading-5 text-gray-500", className)} {...props}/>
    )
}