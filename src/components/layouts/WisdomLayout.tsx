import { MultiSelect, Tabs } from "components";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";

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
    return (
        <div className="space-y-8">
            <Tabs
                tabs={[
                    {name: "List View", route: Routes.ExpertWisdom},
                    {name: "Collection View", route: Routes.ExpertWisdomCollection},
                ]}
            >
                <MultiSelect options={ACCESS_TYPE_OPTIONS} value={ACCESS_TYPE_OPTIONS[0]} onChange={console.log} styled={false}/>
            </Tabs>
           
            <div>
                {props.children}
            </div>
        </div>
    )

}