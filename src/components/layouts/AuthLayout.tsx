import { ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <div className="h-full flex items-center justify-center">
            <ShadowBox>
                {props.children}
            </ShadowBox>
        </div>
    )
}