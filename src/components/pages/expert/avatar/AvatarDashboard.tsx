import { useState } from 'react';
// import { DashboardAvatar } from './DashboardTab';


export function AvatarDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="">
            <div className="flex space-x-4 flex items-center space-x-8 fn fw-sb text-[16px] text-[#6B6985] mb-[28px] profile-tabs">
                <button
                    className={`cursor-pointer px-4 py-3 ${activeTab === 'dashboard'
                            ? 'current border-b fw-b border-[#321841] text-[#321841]'
                            : ''
                        }`}
                    onClick={() => handleTabClick('dashboard')}
                >
                    Dashboard
                </button>
            </div>

            {activeTab === 'dashboard' && <DashboardTab />}
        </div>
    );
}

const DashboardTab = () => <div>
    {/* <DashboardAvatar/> */}
</div>;

