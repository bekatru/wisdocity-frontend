import { useState } from "react";
import { Input } from "components";
import { XMarkIcon } from "@heroicons/react/16/solid";
import AvatarIcon from "../../../../assets/expert-avatar/ai-avatar.png";
import DasboardIcon1 from "../../../../assets/avatar-dashboard/dashboard-icon1.svg";
import { useQueryAgent } from "modules/expert";
import { toast } from "react-toastify";

interface AvatarTestModalProps {
  username: string;
  expertId: number;
}
interface Message {
  text: string;
  sender: string;
}

export function AvatarTestModal(props: AvatarTestModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const username = props.username;

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const { mutate: queryAgent } = useQueryAgent({
    onSuccess: (response: any) => {
      console.log(response);
      const botMessage = { text: response.answer, sender: "agent" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    },
    onError: (error: any) => {
      console.log(error.response?.data.message);
      if (
        error.response?.data?.message &&
        error.response.data.message.length > 0
      ) {
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((errorMessage: string) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
  });

  const handleSubmit = (): void => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    queryAgent({
      userId: props.expertId,
      userQuery: input,
    });
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
                      <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">
                        Test Avatar
                        <div
                          className="float-right w-6 h-6 mt-1 cursor-pointer"
                          onClick={closeModal}
                        >
                          <XMarkIcon />
                        </div>
                      </div>

                      <div className="chat-bot-section">
                        <div className="max-h-[400px] overflow-y-auto min-h-[250px]">
                          {messages.map((message, index) => (
                            <div key={index}>
                              <span>
                                {message.sender === "user" ? (
                                  <>
                                    <div className="flex align-center w-full mb-[15px]">
                                      <div className="me-0">
                                        <span className="avatar avatar-rounded">
                                          <img
                                            className="rounded-full w-[34px]  h-[34px]"
                                            src={AvatarIcon}
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                      <div className="pl-[18px]">
                                        <div className="text-[16px] fn fw-sb text-[#321841] mt-[5px]">
                                          {username}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="w-full bg-[#F1F0F7] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                                      <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">
                                        {message.text}
                                      </p>
                                      {/* <span className="text-[10px] fn fw-r text-[#6B6985]">
                                      01:43
                                    </span> */}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex align-center w-full mb-[15px]">
                                      <div className="me-0">
                                        <span className="avatar avatar-rounded">
                                          <img
                                            className="rounded-full w-[34px]  h-[34px]"
                                            src={AvatarIcon}
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                      <div className="pl-[18px]">
                                        <div className="text-[16px] fn fw-sb text-[#321841] mt-[5px]">
                                          {username} AI Expert
                                        </div>
                                      </div>
                                    </div>

                                    <div className="w-full bg-[#F1F0F7] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                                      <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">
                                        {message.text}
                                      </p>
                                      {/* <span className="text-[10px] fn fw-r text-[#6B6985]">
                                      01:43
                                    </span> */}
                                    </div>
                                  </>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="relative mb-[0px]  mt-[10px]">
                          <Input
                            type="text"
                            placeholder="Write a message.."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault(); // Prevent form submission
                                handleSubmit();
                              }
                            }}
                            className="text-[16px] fn fw-r text-[#321841] outline-none w-full border border-[#D9D9EB] rounded-[6px] h-[50px] px-4 py-2 pr-12"
                          />
                          <button
                            type="submit"
                            className="absolute inset-y-0 right-3"
                            onClick={handleSubmit}
                          >
                            <img src={DasboardIcon1} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
