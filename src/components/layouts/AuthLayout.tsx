import { AuthTopBar, CenteredContainer, ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <>
            <AuthTopBar />
            <CenteredContainer>
                <div className="w-[480px] max-w-[480px]">
                    <ShadowBox>
                        {props.children}
                    </ShadowBox>
                </div>
            </CenteredContainer>
        </>
    )
}