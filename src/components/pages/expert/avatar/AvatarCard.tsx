import { EditModal } from './EditModal';
import { AvatarCollection } from './AvatarCollection';
import { AvatarSamples } from './AvatarSamples';
import { AvatarTestModal } from './AvatarTestModal';
import AvatarIcon from '../../../../assets/expert-avatar/ai-avatar.png';



export function AvatarCard() {

    return (
        <>
            <div className="flex-row-reverse -mt-[72px] mb-[100px]">
                <AvatarTestModal />
            </div>

            <div className="w-full card shadow-p bg-white px-6 py-6">
                <div className="box-body  mb-[42px]">
                    <div className="flex align-center w-full">
                        <div className="me-0">
                            <span className="avatar avatar-rounded">
                                <img src={AvatarIcon} alt="" />
                            </span>
                        </div>
                        <div className="pl-[24px]">
                            <div className="text-[24px] fn fw-sb text-[#17192B] mt-[17px]">John Wilson</div>
                        </div>
                        <div className="ms-auto">
                            <EditModal />
                        </div>
                    </div>
                </div>

                <AvatarCollection />

                <AvatarSamples />
                
            </div>
        </>
    );
}


