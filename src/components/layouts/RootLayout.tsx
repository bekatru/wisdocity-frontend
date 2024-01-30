import { Footer, Header } from "components";
import { PropsWithChildren } from "react";

export function RootLayout(props: PropsWithChildren) {
    return <div className="h-full w-full overflow-scroll flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
            {props.children}
        </main>
        <Footer/>
    </div>
}