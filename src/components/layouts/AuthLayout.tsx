import { PropsWithChildren } from "react";

export function AuthLayout(props: PropsWithChildren) {
    return (
        <div className="h-full flex items-center justify-center">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg max-w-[480px] grow">
                    <div className="px-4 py-5 sm:p-6">{props.children}</div>
                </div>
            </div>
    )
}