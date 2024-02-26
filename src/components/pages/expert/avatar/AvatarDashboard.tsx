import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { AvatarInfo } from './AvatarComponents/AvatarInfo';
import { AvatarSetting } from './AvatarComponents/AvatarSetting';
import { AvatarTest } from './AvatarComponents/AvatarTest';

export function AvatarDashboard() {
    const [activeTab, setActiveTab] = useState(0); // State to keep track of active tab index

    return (
        <div className="w-full h-full">
            <Tab.Group
                defaultIndex={activeTab}
                onChange={index => setActiveTab(index)}
            >
                <Tab.List className="flex space-x-4 flex items-center space-x-8 fn fw-sb text-[16px] text-[#6B6985] mb-[28px] profile-tabs">
                    <Tab
                        className={`px-4 py-3 border-b fw-b focus:outline-none text-[16px]  ${
                            activeTab === 0 ? 'border-[#321841]' : 'border-[#f4f1f5]'
                        } text-[#321841]`}
                    >
                        Info
                    </Tab>
                    <Tab
                        className={`px-4 py-3 border-b fw-b focus:outline-none text-[16px] ml-[20px] ${
                            activeTab === 1 ? 'border-[#321841]' : 'border-[#f4f1f5]'
                        } text-[#321841]`}
                    >
                        Settings
                    </Tab>
                    <Tab
                        className={`px-4 py-3 border-b fw-b focus:outline-none text-[16px] ml-[20px] ${
                            activeTab === 2 ? 'border-[#321841]' : 'border-[#f4f1f5]'
                        } text-[#321841]`}
                    >
                        Test
                    </Tab>
                </Tab.List>
                <Tab.Panels className="relative">
                    <Tab.Panel>
                        <AvatarInfo />
                    </Tab.Panel>
                    <Tab.Panel>
                        <AvatarSetting />
                    </Tab.Panel>
                    <Tab.Panel>
                        <AvatarTest />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
