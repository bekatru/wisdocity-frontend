import classNames from "classnames";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface Tab {
    name: string;
    route: Routes;
}

export interface TabsProps extends PropsWithChildren {
    tabs: Tab[];
}

export function Tabs(props: TabsProps) {

    const location = useLocation();
    const navigate = useNavigate();

    const isCurrentRoute = (route: string) => location.pathname === route;

    return (
        <nav className="flex items-center space-x-8">
            {
                props.tabs.map((tab) => (
                    <div
                        key={tab.name}
                        onClick={() => navigate(tab.route)}
                        className={classNames(
                            "cursor-pointer bottom-1 px-2 font-bold",
                            { "border-b border-black text-slate-950": isCurrentRoute(tab.route) },
                            { "hover:border-b border-gray-400 text-gray-500 pb-[1px] hover:pb-0": !isCurrentRoute(tab.route) },
                        )}
                    >
                        {tab.name}
                    </div>
                ))
            }
            {props.children}
        </nav>
    )
}