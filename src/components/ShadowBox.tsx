import classNames from "classnames";
import { HTMLAttributes, memo } from "react";

export const ShadowBox = memo((props: HTMLAttributes<HTMLDivElement>) => {
    return <div {...props} className={classNames("bg-white shadow rounded-2xl p-6", props.className)}/>
    
})
