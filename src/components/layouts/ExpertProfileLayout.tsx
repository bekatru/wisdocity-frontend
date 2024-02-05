import { Routes } from "modules/routing";
import { PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function ExpertProfileLayout(props: PropsWithChildren) {
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentRoute = (route: string) => location.pathname === route;

    return (
        <div>
            <nav className="flex items-center space-x-8 fn fw-sb text-[16px] text-[#321841] mb-[28px] profile-tabs">
                <div
                    className={`cursor-pointer px-4 py-4 ${isCurrentRoute(Routes.ExpertProfile) ? 'current border-b border-[#321841]' : ''}`}
                    onClick={() => navigate(Routes.ExpertProfile)}
                >
                    Personal Information
                </div>
                <div
                    className={`cursor-pointer px-4 py-4 ${isCurrentRoute(Routes.ExpertProfileBilling) ? 'current border-b border-[#321841]' : ''}`}
                    onClick={() => navigate(Routes.ExpertProfileBilling)}
                >
                    Earnings
                </div>
                <div
                    className={`cursor-pointer px-4 py-4 ${isCurrentRoute(Routes.ExpertProfileSettings) ? 'current border-b border-[#321841]' : ''}`}
                    onClick={() => navigate(Routes.ExpertProfileSettings)}
                >
                    Settings
                </div>
            </nav>
            <div>{props.children}</div>
        </div>
    );
}
