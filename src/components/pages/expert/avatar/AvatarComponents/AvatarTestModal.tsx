import { useState, useRef, useEffect, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import { Input } from "components";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { StarIcon } from "@heroicons/react/16/solid";
import { MicrophoneIcon } from "@heroicons/react/24/outline";

import AvatarIcon from "../../../../../assets/expert-avatar/ai-avatar.png";
import ChatSend from "../../../../../assets/expert-avatar/ic_round-send.png";
import CopyIcon from "../../../../../assets/expert-avatar/bi_copy.png";
import HeartIcon from "../../../../../assets/expert-avatar/heart.png";
import DeleteIcon from "../../../../../assets/expert-avatar/uiw_delete.png";

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const username = props.username;
  const messagesEndRef = useRef<HTMLDivElement>(null);




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

      <div className="inset-0 overflow-y-auto flex items-center justify-center">
        <div className="w-full  px-6 py-6 mb-[0px]">
          <div>
            <div className="flex w-full">
              <div className="box-body w-full">
                <div className="flex align-center w-full">
                  <div className="w-full">


                    <div className="card bg-white px-6 pb-[15px] border-b border-[#D9D9EB]">

                      <div className="flex align-center w-full">
                        <div className="me-0">
                          <span className="avatar avatar-rounded">
                            <img className="w-[38px] h-[38px] rounded-full" src={AvatarIcon} alt="" />
                          </span>
                        </div>
                        <div className="pl-[17px] flex flex-grow">
                          <div className="text-[16px] fn fw-sb text-[#321841] mt-[0px] mb-[0px]">
                            Ronald Richards
                            <div className="flex text-[12px] fn fw-r text-[#6B6985]">
                              Learner
                            </div>
                          </div>
                          <div className="flex items-center ml-[40px]">
                            <StarIcon className="h-4 w-4 text-[#64108F]" />
                            <StarIcon className="h-4 w-4 text-[#64108F]" />
                            <StarIcon className="h-4 w-4 text-[#64108F]" />
                            <StarIcon className="h-4 w-4 text-[#64108F]" />
                            <StarIcon className="h-4 w-4 text-[#64108F]" />
                            <span className="ms-[8px] mt-[3px] text-[12px] fn fw-m text-[#64108F]">
                              4.8 (20 reviews)
                            </span>
                          </div>
                          <div className="flex items-end ml-auto">
                            <MyDropdown />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center  border-b border-[#D9D9EB] pt-[15px] pb-[15px] mb-[15px]">
                      <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] ">Invesment</button>
                      <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] ">Work</button>
                      <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] ">Psychology</button>
                      <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] ">Invesment</button>
                    </div>






                    <div className="chat-bot-section">
                      <div className="max-h-[400px] overflow-y-auto min-h-[300px]">
                        {messages.map((message, index) => (
                          <div className="w-full" key={index}>
                            {message.sender === "user" ? (
                              <>
                                <div className="min-w-[60%] float-right">
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
                                    <div className="flex items-end ml-auto">
                                      <img className="cursor-pointer" src={CopyIcon} alt="" />
                                      <img className="ml-[15px] cursor-pointer" src={HeartIcon} alt="" />
                                      <img className="ml-[15px] cursor-pointer" src={DeleteIcon} alt="" />
                                    </div>
                                  </div>

                                  <div className="w-full bg-[#F1F0F7] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                                    <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">
                                      {message.text}
                                    </p>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                              <div className="min-w-[60%] float-left">
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
                                  <div className="flex items-end ml-auto">
                                      <img className="cursor-pointer" src={CopyIcon} alt="" />
                                      <img className="ml-[15px] cursor-pointer" src={HeartIcon} alt="" />
                                      <img className="ml-[15px] cursor-pointer" src={DeleteIcon} alt="" />
                                    </div>
                                </div>

                                <div className="w-full bg-[#DFB4F3] rounded-[24px] rounded-tl-[0px] px-4 py-4 mb-[20px]">
                                  <p className="text-[14px] fn fw-r text-[#321841] mb-[12px]">
                                    {message.text}
                                  </p>
                                </div>
                                </div>
                              </>
                            )}
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

                        <div className="absolute top-[0px] right-[58px]">
                          <button
                            type="submit"
                            className="mt-[14px]"
                            onClick={handleSubmit}
                          >
                            <img src={ChatSend} alt="" />
                          </button>
                          {isLoading && (
                            <div className="absolute top-[0px] right-0 flex items-center pr-1 pl-5 bg-[#64108F] h-[50px]">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                          )}

                        </div>
                        <button className="absolute top-[13px] py-1 px-1 right-3 bg-[#F6E3FF] rounded-full">
                          <MicrophoneIcon className="h-5 w-5 text-[#64108F]" />
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
    </>
  );
}


function MyDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-0 py-2 text-sm font-medium text-white ">
          <EllipsisVerticalIcon
            className="-mr-1 ml-0 h-5 w-5 text-[#321841] hover:text-[#64108F]"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-[8px] bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-0">

            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

