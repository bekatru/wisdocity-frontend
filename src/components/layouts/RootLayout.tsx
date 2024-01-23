import { Header } from "components";
import { PropsWithChildren } from "react";

export function RootLayout(props: PropsWithChildren) {
    return <div className="h-full w-full overflow-scroll flex flex-col bg-slate-50">
        <Header username="" onMenuClick={() => {}}/>
        <main className="flex-grow">
            {props.children}
        </main>
    </div>
}