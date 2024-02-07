
import { AvatarCard } from "./AvatarCard";

export function AvatarDashboard() {
   
    return (
        <div className="">
            <div className="flex space-x-4 flex items-center space-x-8 fn fw-sb text-[16px] text-[#6B6985] mb-[28px] profile-tabs">
                <div
                    className="px-4 py-3 current border-b fw-b border-[#321841] text-[#321841]">
                    Avatar Info
                </div>
            </div>

            <AvatarCard/>

        </div>
    );
}



