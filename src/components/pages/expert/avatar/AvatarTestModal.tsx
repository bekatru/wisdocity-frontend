import { useState, useRef, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const username = props.username;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const { mutate: queryAgent } = useQueryAgent({
    onSuccess: (response: any) => {
      setIsLoading(false);
      console.log(response);
      let botResponse = "";
      if (response.answer) {
        botResponse = response.answer;
      } else if (response.message) {
        botResponse = response.message;
      } else {
        botResponse = "Error";
      }
      const botMessage = { text: botResponse, sender: "agent" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    },
    onError: (error: any) => {
      setIsLoading(false);
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
    setIsLoading(true);
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    queryAgent({
      userId: props.expertId,
      userQuery: input,
    });
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
                                    </div>
                                  </>
                                )}
                              </span>
                            </div>
                          ))}
                          <div ref={messagesEndRef} />
                        </div>

                        <div className="relative mb-[0px]  mt-[10px] overflow-hidden">
                          <Input
                            type="text"
                            placeholder="Write a message.."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
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
                          {isLoading && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-1 pl-5 bg-[#64108F]">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                          )}
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
