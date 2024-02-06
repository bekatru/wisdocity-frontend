import classNames from "classnames";
import { MultiSelect } from "components";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router-dom";

enum CollectionAccessType {
    Private,
    Wisdocity,
    Public,
}

const ACCESS_TYPE_OPTIONS = [
    {
        id: CollectionAccessType.Private,
        value: "Only me",
    },
    {
        id: CollectionAccessType.Wisdocity,
        value: "Wisdocity chat",
    },
    {
        id: CollectionAccessType.Public,
        value: "Everywhere my avatar is embeded",
    },
]

export function WisdomLayout(props: PropsWithChildren) {
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentRoute = (route: string) => location.pathname === route;

    return (
        <div className="space-y-8">
            <nav className="flex items-center space-x-8">
                <div
                    onClick={() => navigate(Routes.ExpertWisdom)}
                    className={classNames(
                        "cursor-pointer bottom-1 p-2 hover:border-b hover:pb-[7px] border-gray-400",
                        { "border-b border-black pb-[7px] font-bold": isCurrentRoute(Routes.ExpertWisdom) }
                    )}
                >
                    List View
                </div>
                <div
                    onClick={() => navigate(Routes.ExpertWisdomCollection)}
                    className={classNames(
                        "cursor-pointer bottom-1 p-2 hover:border-b hover:pb-[7px] border-gray-400",
                        { "border-b border-black pb-[7px] font-bold": isCurrentRoute(Routes.ExpertWisdomCollection) }
                    )}
                >  
                    Collection View
                </div>
                <MultiSelect options={ACCESS_TYPE_OPTIONS} value={ACCESS_TYPE_OPTIONS[0]} onChange={console.log} styled={false}/>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
    )

}