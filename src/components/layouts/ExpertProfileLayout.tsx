import { Tabs } from "components";
import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";

export function ExpertProfileLayout(props: PropsWithChildren) {
    return (
        <div className="space-y-8 w-full flex flex-col">
            <Tabs
                tabs={[
                    {name: "Personal Information", route: Routes.ExpertProfile},
                    {name: "Earnings", route: Routes.ExpertProfileBilling},
                    {name: "Settings", route: Routes.ExpertProfileSettings},
                ]}
            />
            <div>{props.children}</div>
        </div>
    );
}
