import { Tabs } from "components";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";

export function WisdomLayout(props: PropsWithChildren) {
    return (
        <div className="space-y-8">
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