import { useState } from "react";
import { Input } from "components";
import { XMarkIcon } from "@heroicons/react/16/solid";
import AvatarIcon from '../../../../assets/expert-avatar/ai-avatar.png';
import DasboardIcon1 from "../../../../assets/avatar-dashboard/dashboard-icon1.svg";


export function AvatarTestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>

      <div className="float-right">
        <button
          type="button"
          className="text-purple-800 bg-transparent font-semibold rounded-full px-10 py-2 border border-purple-800 mb-4 flex float-right"
          onClick={openModal}
        >
          Test avatar
        </button>
      </div>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-md w-full mx-auto z-50 card shadow-p bg-white px-6 py-6 mb-[34px]">
            <div>
              <div className="flex w-full">
                <div className="box-body w-full">
                  <div className="flex align-center w-full">
                    <div className="w-full">
                      <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">Test Avatar
                        <div
                          className="float-right w-6 h-6 mt-1 cursor-pointer"
                          onClick={closeModal}
                        >
                          <XMarkIcon />
                        </div>
                      </div>

                      <div className="chat-bot-section">

                        <div className="flex align-center w-full mb-[15px]">
                          <div className="me-0">
                            <span className="avatar avatar-rounded">
                              <img className="rounded-full w-[34px]  h-[34px]" src={AvatarIcon} alt="" />
                            </span>
                          </div>
                          <div className="pl-[18px]">
                            <div className="text-[16px] fn fw-sb text-[#321841] mt-[5px]">Expert John</div>
                          </div>
                        </div>

                        <div className="w-full bg-[#F1F0F7] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                          <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                          <span className="text-[10px] fn fw-r text-[#6B6985]">01:43</span>
                        </div>

                        <div className="flex align-center w-full mb-[15px]">
                          <div className="me-0">
                            <span className="avatar avatar-rounded">
                              <img className="rounded-full w-[34px]  h-[34px]" src={AvatarIcon} alt="" />
                            </span>
                          </div>
                          <div className="pl-[18px]">
                            <div className="text-[16px] fn fw-sb text-[#321841] mt-[5px]">John AI Expert</div>
                          </div>
                        </div>

                        <div className="w-full bg-[#F1F0F7] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                          <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                          <span className="text-[10px] fn fw-r text-[#6B6985]">01:43</span>
                        </div>

                        <div className="relative mb-[30px]  mt-[10px]">
                          <Input type="text" placeholder="Write a message.." className="text-[16px] fn fw-r text-[#321841] outline-none w-full border border-[#D9D9EB] rounded-[6px] h-[50px] px-4 py-2 pr-12" />
                          <button type="submit" className="absolute inset-y-0 right-3">
                            <img src={DasboardIcon1} alt="" />
                          </button>
                        </div>



                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-[#fff] text-[#8419BB] text-[16px] fn fw-sb border-[#8419BB] border px-8 py-2 rounded-full hover:text-gray-700 w-[48%] mr-[1%]" onClick={closeModal}>
                Save
              </button>
              <button className="bg-[#8419BB] text-[#fff] text-[16px] fn fw-sb border-[#8419BB] border px-8 py-2 rounded-full  w-[48%] ml-[3%]" onClick={closeModal}>
                Cancel
              </button>


            </div>
          </div>
        </div>
      )}
    </>
  );
}

