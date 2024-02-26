import { EditModal } from "./EditModal";
import { useState } from "react";
import AvatarIcon from "../../../../../assets/expert-avatar/ai-avatar.png";
import CopyIcon from "../../../../../assets/expert-avatar/bi_copy.png";
import ShareIcon from "../../../../../assets/expert-avatar/ph_share.png";
import { useAvatarDetail } from "modules/expert";

import { Infotable } from "./InfoTable";
import { AvatarExampleConvesationEditModal } from "./AvatarExampleConversationEditModal";

export function AvatarInfo() {
  const avatarDetail = useAvatarDetail();
  console.log("avatarDetail", avatarDetail?.data);

  const [exampleConversations, setExampleConversations] = useState<string>(
    avatarDetail?.data?.exampleConversations || ""
  );

  const handleExampleConversationsUpdate = (newExampleConversation: string) => {
    setExampleConversations(newExampleConversation);
  };
  return (
    <>
      <div className="w-full card shadow-p bg-white px-6 py-6">
        <div className="box-body  mb-[42px]">
          <div className="flex align-center w-full">
            <div className="me-0">
              <span className="avatar avatar-rounded">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={AvatarIcon}
                  alt=""
                />
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
                <p className="text-[14px] text-[#321841] fn fw-sb">
                  Link:{" "}
                  <span className="text-[#006BC5] cursor-pointer">
                    https://wisdocity.ai/avatars/gdkrs43678
                  </span>
                </p>
                <div className="ml-[20px]">
                  <img
                    className="float-right ml-[15px] cursor-pointer"
                    src={ShareIcon}
                    alt=""
                  />
                  <img
                    className="float-right cursor-pointer"
                    src={CopyIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[30px] max-w-[65%]">
            <h5 className="text-[15px] text-[#321841] fn fw-b mb-[10px]">
              Bio
            </h5>
            <div className="p-4 border rounded-[8px] border-[#D9D9EB]">
              <p className="text-[14px] text-[#6B6985] fn fw-sb">
                Empowering individuals to navigate their career paths with
                confidence. Certified Career Development Professional with a
                Master's in Counseling. Specializing in career assessments,
                resume writing, interview preparation, and job search
                strategies. Let's work together to turn your career aspirations
                into reality!
              </p>
            </div>
          </div>

          <div className="w-full mt-[30px] max-w-[65%]">
            <h5 className="flex text-[15px] text-[#321841] fn fw-b mb-[10px]">
              Examples of your conversations
              {avatarDetail.data && (
                <AvatarExampleConvesationEditModal
                  exampleConversations={exampleConversations}
                  id={avatarDetail.data.id}
                  userId={avatarDetail.data.user.id}
                  onExampleConversationUpdate={handleExampleConversationsUpdate}
                />
              )}
            </h5>

            <div className="p-4 border rounded-[8px] border-[#D9D9EB]">
              {avatarDetail.data && (
                <p className="text-[14px] text-[#6B6985] fn fw-sb">
                  {avatarDetail.data.exampleConversations}
                </p>
              )}
            </div>
          </div>

          <div className=" mt-[30px] max-w-[75%]">
            <h5 className="text-[16px] text-[#321841] fn fw-b mb-[15px]">
              Assign Wisdom Collections for your Avatar
            </h5>
            <p className="text-[14px] text-[#6B6985] fn fw-sb">
              Here,you can assign specific collections of your wisdom to
              strengthen and personalize your Avatar's capabilities. This means
              that your Avatar will have access to the knowledge and insights
              stored within that particular collection. Simply click the
              checkbox next to a collection name to assign it. To unassign a
              collection, uncheck the box. For uploading new wisdom content or
              creating a new collection, visit the Wisdom page or click here.
              <a href="#" className="underline">
                click here.
              </a>
            </p>
          </div>

          <Infotable />
        </div>
      </div>
    </>
  );
}
