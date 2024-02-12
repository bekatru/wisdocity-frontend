import { useState } from "react";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { Switch } from "@headlessui/react";
interface ProfileLifeChatWorkshopProps {
  isLiveChat: boolean;
  isWorkshops: boolean;
  calenderLinkLiveChat: string;
  calenderLinkWorkshop: string;
}

export default function ProfileLifeChatWorkshop(
  props: ProfileLifeChatWorkshopProps
) {
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
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
                    checked={enabled1}
                    onChange={setEnabled1}
                    className={`${
                      enabled1 ? "bg-[#8726B9]" : "bg-[#D9D9EB]"
                    } relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        enabled1 ? "translate-x-4" : "translate-x-0"
                      } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>

              <p className="w-full text-[16px] fn fw-sb text-[#321841] mb-[0px]">
                Calendar Link:<strong>{props.calenderLinkLiveChat}</strong>
                <button className="text-black float-right">
                  <img src={EditIcon} alt="Edit" />
                </button>
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
                    checked={enabled2}
                    onChange={setEnabled2}
                    className={`${
                      enabled2 ? "bg-[#8726B9]" : "bg-[#D9D9EB]"
                    } relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        enabled2 ? "translate-x-4" : "translate-x-0"
                      } pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>

              <p className="w-full text-[16px] fn fw-sb text-[#6B6985] mb-[14px]">
                Calendar link:{props.calenderLinkWorkshop}
              </p>

              <form>
                <div className="flex">
                  <input
                    type="search"
                    id="search"
                    className="h-12 min-w-[82%] border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Interviews"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-btn-theme fn fw-sb rounded-full px-8 py-3 text-center text-[16px] ml-[10px] float-right"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
