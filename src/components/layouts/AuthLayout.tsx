import { AuthTopBar } from "components";
import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <div className="h-full w-full flex flex-col">
            <AuthTopBar />
            <div className="grow">
                {props.children}
            </div>
        </div>
    )
}