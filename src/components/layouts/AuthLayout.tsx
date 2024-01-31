import { AuthTopBar, CenteredContainer, ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <>
            <AuthTopBar />
            <CenteredContainer>
                <div className="sm:min-w-[528px]">
                    <ShadowBox>
                        {props.children}
                    </ShadowBox>
                </div>
            </CenteredContainer>
        </>
    )
}