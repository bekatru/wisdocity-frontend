import { useState } from "react";
import { Switch } from "@headlessui/react";
import {
  useEditProfileIsLiveChat,
  useEditProfileIsWorkshops,
} from "modules/expert";
import { toast } from "react-toastify";
import { ProfileLiveChatEditModal } from "./ProfileLiveChatEditModal";
import { ProfileWorkshopsEditModal } from "./ProfileWorkshopsEditModal";
interface ProfileLifeChatWorkshopProps {
  isLiveChat: boolean;
  isWorkshops: boolean;
  calenderLinkLiveChat: string;
  calenderLinkWorkshop: string;
  expertId: number;
}

export default function ProfileLifeChatWorkshop(
  props: ProfileLifeChatWorkshopProps
) {
  const [isLiveChat, setIsLiveChat] = useState<boolean>(props.isLiveChat);
  const [isWorkshops, setIsWorkshops] = useState<boolean>(props.isWorkshops);
  const [calenderLinkLiveChat, setCalenderLinkLiveChat] = useState<string>(
    props.calenderLinkLiveChat
  );
  const [calenderLinkWorkshop, setCalenderLinkWorkshop] = useState<string>(
    props.calenderLinkWorkshop
  );

  const expertId = props.expertId;

  const { mutate: editProfileIsLiveChat } = useEditProfileIsLiveChat({
    onSuccess: () => {
      // toast.success("Profile updated successfully!");
      setIsLiveChat(!isLiveChat);
    },
    onError: (error) => {
      console.log(error.response?.data.message);
      if (
        error.response?.data?.message &&
        error.response.data.message.length > 0
      ) {
        // If error message is an array, iterate over it and display each message
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
  });
  const setLiveChatStatus = (value: boolean) => {
    editProfileIsLiveChat({ id: expertId, value: value });
  };

  const { mutate: editProfileIsWorkshops } = useEditProfileIsWorkshops({
    onSuccess: () => {
      // toast.success("Profile updated successfully!");
      setIsWorkshops(!isWorkshops);
    },
    onError: (error) => {
      console.log(error.response?.data.message);
      if (
        error.response?.data?.message &&
        error.response.data.message.length > 0
      ) {
        // If error message is an array, iterate over it and display each message
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
  });

  const setWorkshopsStatus = (value: boolean) => {
    editProfileIsWorkshops({ id: expertId, value: value });
  };

  const handleProfileLiveChatLinkUpdate = (newlink: string) => {
    setCalenderLinkLiveChat(newlink);
  };

  const handleProfileWorkshopsLinkUpdate = (newlink: string) => {
    setCalenderLinkWorkshop(newlink);
  };

  return (
    <>
      <div className="card shadow-p bg-white px-6 py-6  mb-[34px]">
        <div className="box-body">
          <div className="flex align-center w-full">
            <div className="w-full">
              <div className="flex items-start text-[20px] fn fw-b text-[#321841] mb-[24px]">
                Live Chat
                <div className="flex flex-wrap items-center ml-[40px] mt-[1px]">
                  <Switch
                    checked={isLiveChat}
                    onChange={setLiveChatStatus}
                    className={`${
                      isLiveChat ? "bg-[#8726B9]" : "bg-[#D9D9EB]"
                    } relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        isLiveChat ? "translate-x-4" : "translate-x-0"
                      } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>

              <p className="w-full text-[16px] fn fw-sb text-[#321841] mb-[0px]">
                Calendar Link:<strong>{calenderLinkLiveChat}</strong>
                <ProfileLiveChatEditModal
                  expertId={expertId}
                  calenderLinkLiveChat={calenderLinkLiveChat}
                  onProfileLiveChatLinkUpdate={handleProfileLiveChatLinkUpdate}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-p bg-white px-6 py-6  mb-[34px]">
        <div className="box-body">
          <div className="flex align-center w-full">
            <div className="w-full">
              <div className="flex items-start text-[20px] fn fw-b text-[#321841] mb-[24px]">
                Workshops
                <div className="flex flex-wrap items-center ml-[40px] mt-[1px]">
                  <Switch
                    checked={isWorkshops}
                    onChange={setWorkshopsStatus}
                    className={`${
                      isWorkshops ? "bg-[#8726B9]" : "bg-[#D9D9EB]"
                    } relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        isWorkshops ? "translate-x-4" : "translate-x-0"
                      } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>

              <p className="w-full text-[16px] fn fw-sb text-[#6B6985] mb-[14px]">
                Calendar link:{calenderLinkWorkshop}
                <ProfileWorkshopsEditModal
                  expertId={expertId}
                  calenderLinkWorkshop={calenderLinkWorkshop}
                  onProfileWorkshopsLinkUpdate={
                    handleProfileWorkshopsLinkUpdate
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
