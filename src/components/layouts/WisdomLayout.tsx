import { Tabs } from "components";
import { useFiles } from "modules/expert";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";

export function WisdomLayout(props: PropsWithChildren) {

    const files = useFiles();

    if (!files.data?.length) {
        return props.children;
    }

    return (
        <div className="space-y-8 flex-grow">
            <Tabs
                tabs={[
                    {name: "List View", route: Routes.ExpertWisdom},
                    {name: "Collection View", route: Routes.ExpertWisdomCollections},
                ]}
            />
            <div>
                {props.children}
            </div>
        </div>
    )

}