import { AuthTopBar, ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <div className="h-full w-full flex flex-col">
            <AuthTopBar />
            <div className="grow">
                <div className="h-full w-full flex items-center justify-center">
                    <ShadowBox>
                        {props.children}
                    </ShadowBox>
                </div>
            </div>
        </div>
    )
}