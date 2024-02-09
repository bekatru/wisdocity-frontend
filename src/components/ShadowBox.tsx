import classNames from "classnames";
import { HTMLAttributes } from "react";

export function ShadowBox(props: HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={classNames("bg-white shadow rounded-2xl p-6", props.className)}/>
    
}