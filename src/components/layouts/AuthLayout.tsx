import { AuthTopBar, ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <div className="h-screen w-screen flex flex-col">
            <AuthTopBar />
            <div className="grow flex items-center justify-center">
                <ShadowBox>
                    {props.children}
                </ShadowBox>
            </div>
        </div>
    )
}