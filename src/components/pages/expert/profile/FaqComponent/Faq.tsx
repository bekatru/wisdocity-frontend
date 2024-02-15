import { useState } from "react";
import { FaqEditModal } from "./FaqEditModal";
import { FaqAddModal } from "./FaqAddModal";


export function Faq() {

  const [accordionState, setAccordionState] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleAccordion = (index: number) => {
    const newState = [...accordionState];
    newState[index] = !newState[index];
    setAccordionState(newState);
  };
  return (
    <>
      <div className="card shadow-p bg-white px-6 py-6 md:max-w-[90%]">
        <h4 className="fn text-[#321841] fw-b text-[20px] mb-[16px] flex justify-between">
          Frequently Asked Questions
          <FaqAddModal />
        </h4>
        <div className="flex flex-wrap -mx-4 w-full">
          <div className="w-full md:w-1/2 px-4  mb-[34px]">
            {/* Accordion 1 */}
            <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px] relative">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(0)}
              >
                <div className="text-[14px] fn fw-sb text-[#17192B]">
                  <span className="mr-[12px]">1</span> How does a 1:1
                  consultation work?
                </div>
                <div className="flex justify-center items-center">
                  <span className="mr-[10px] mt-[5px]"><FaqEditModal /></span>
                  {accordionState[0] ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M1 8.5L8 1.5L15 8.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M15 1.5L8 8.5L1 1.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              {accordionState[0] && (
                <div className="py-6 px-6 left-0 rounded-xl bg-[#F7F1FD]">
                  {/* Accordion 1 content */}
                  <p className="text-[14px] fn fw-r text-[#212D38]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatu

                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>

          </div>

          {/* Accordion 2 */}
          <div className="w-full md:w-1/2 px-4 mb-[34px]">
            <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(1)}
              >
                <div className="text-[14px] fn fw-sb text-[#17192B]">
                  <span className="mr-[12px]">2</span> How long are the session?
                </div>
                <div className="flex justify-center items-center">
                  <span className="mr-[10px] mt-[5px]"><FaqEditModal /></span>
                  {accordionState[1] ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M1 8.5L8 1.5L15 8.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M15 1.5L8 8.5L1 1.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              {accordionState[1] && (
                <div className="py-6 px-6">
                  {/* Accordion 2 content */}
                  <p className="text-[14px] fn fw-r text-[#212D38]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatu
                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
          </div>

          {/* Accordion 3 */}
          <div className="w-full md:w-1/2 px-4 mb-[34px]">
            <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(2)}
              >
                <div className="text-[14px] fn fw-sb text-[#17192B]">
                  <span className="mr-[12px]">3</span> Can i reschedule or
                  cancel my session
                </div>
                <div className="flex justify-center items-center">
                  <span className="mr-[10px] mt-[5px]"><FaqEditModal /></span>
                  {accordionState[2] ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M1 8.5L8 1.5L15 8.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M15 1.5L8 8.5L1 1.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              {accordionState[2] && (
                <div className="py-6 px-6">
                  {/* Accordion 3 content */}
                  <p className="text-[14px] fn fw-r text-[#212D38]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatu
                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
          </div>

          {/* Accordion 4 */}
          <div className="w-full md:w-1/2 px-4 mb-[34px]">
            <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(3)}
              >
                <div className="text-[14px] fn fw-sb text-[#17192B]">
                  <span className="mr-[12px]">4</span> How much can we
                  accomplish in a virtual session
                </div>
                <div className="flex justify-center items-center">
                  <span className="mr-[10px] mt-[5px]"><FaqEditModal /></span>
                  {accordionState[3] ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M1 8.5L8 1.5L15 8.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          d="M15 1.5L8 8.5L1 1.5"
                          stroke="#19212A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              {accordionState[3] && (
                <div className="py-6 px-6">
                  {/* Accordion 4 content */}
                  <p className="text-[14px] fn fw-r text-[#212D38]">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo con. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatu
                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
