import { CenteredContainer, ShadowBox } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <CenteredContainer>
            <ShadowBox>
                {props.children}
            </ShadowBox>
        </CenteredContainer>
    )
}