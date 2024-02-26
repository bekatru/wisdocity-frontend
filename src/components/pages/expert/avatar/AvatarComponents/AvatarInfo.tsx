import { EditModal } from "./EditModal";
import AvatarIcon from "../../../../../assets/expert-avatar/ai-avatar.png";
import CopyIcon from "../../../../../assets/expert-avatar/bi_copy.png";
import ShareIcon from "../../../../../assets/expert-avatar/ph_share.png";

import { Infotable } from "./InfoTable";

export function AvatarInfo() {

  return (
    <>
      <div className="w-full card shadow-p bg-white px-6 py-6">
        <div className="box-body  mb-[42px]">
          <div className="flex align-center w-full">
            <div className="me-0">
              <span className="avatar avatar-rounded">
                <img className="w-[70px] h-[70px] rounded-full" src={AvatarIcon} alt="" />
              </span>
            </div>
            <div className="pl-[24px]">
              <div className="text-[24px] fn fw-sb text-[#17192B] mt-[3px] mb-[3px]">
                John Wilson
                <div className="ms-auto float-right">
                  <EditModal />
                </div>
              </div>
              <div className="flex">
                <p className="text-[14px] text-[#321841] fn fw-sb">Link: <span className="text-[#006BC5] cursor-pointer">https://wisdocity.ai/avatars/gdkrs43678</span></p>
                <div className="ml-[20px]">
                  <img className="float-right ml-[15px] cursor-pointer" src={ShareIcon} alt="" />
                  <img className="float-right cursor-pointer" src={CopyIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[30px]">
            <h5 className="text-[16px] text-[#321841] fn fw-b mb-[15px]">Assign Wisdom Collections for your Avatar</h5>
            <p className="text-[14px] text-[#6B6985] fn fw-sb">
              Please assign/unassign collections below to link with your Avatar. <br/>
              Checked collections are already linked. You can modify by checking or unchecking the collection names.<br/> 
              To add new wisdom content and collections, use the Wisdom menu or <a href="#" className="underline">click here.</a>
            </p>
          </div>

          <Infotable />
          

        </div>
      </div>
    </>
  );
}
