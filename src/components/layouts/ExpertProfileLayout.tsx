import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export function ExpertProfileLayout(props: PropsWithChildren) {
    const navigate = useNavigate();
    return <div>
        <nav className="flex items-center space-x-8">
            <div onClick={() => navigate(Routes.ExpertProfile)}>Personal Information</div>
            <div onClick={() => navigate(Routes.ExpertProfileBilling)}>Billing and Payment</div>
            <div onClick={() => navigate(Routes.ExpertProfileSettings)}>Settings</div>
        </nav>
        <div>{props.children}</div>
    </div>
}