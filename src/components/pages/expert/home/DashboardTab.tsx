import { useState } from 'react';
import DasboardIcon1 from "../../../../assets/avatar-dashboard/dashboard-icon1.svg";
import DasboardIcon2 from "../../../../assets/avatar-dashboard/dashboard-icon2.svg";
import DasboardIcon3 from "../../../../assets/avatar-dashboard/dashboard-icon3.svg";
import DasboardIcon4 from "../../../../assets/avatar-dashboard/dashboard-icon4.svg";
import DasboardIcon5 from "../../../../assets/avatar-dashboard/dashboard-icon5.svg";
import DasboardIcon6 from "../../../../assets/avatar-dashboard/dashboard-icon6.svg";

export function DashboardAvatar() {

    const [accordionState, setAccordionState] = useState([false, false, false, false]);
    const toggleAccordion = (index: number) => {
        const newState = [...accordionState];
        newState[index] = !newState[index];
        setAccordionState(newState);
    };

    return (
        <>
            <div className='w-full flex flex-col'>
                <div className='sorting-content px-2'>
                    <h3 className='fn fw-b text-[24px] text-[#321841] mb-[16px]'>Avatar Interaction Insights</h3>
                    <div className="flex align-center w-full">
                        <div className="px-0">
                            <button type="button" className="text-[#6B6985] bg-white fn fw-sb rounded-[12px] px-4 py-1.5 text-center text-[16px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">24 hours</button>
                            <button type="button" className="text-[#6B6985] bg-white fn fw-sb rounded-[12px] px-4 py-1.5 text-center text-[16px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">3 Days</button>
                            <button type="button" className="text-[#6B6985] bg-white fn fw-sb rounded-[12px] px-4 py-1.5 text-center text-[16px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Last week</button>
                            <button type="button" className="text-[#6B6985] bg-white fn fw-sb rounded-[12px] px-4 py-1.5 text-center text-[16px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Last month</button>
                            <button type="button" className="text-[#6B6985] bg-white fn fw-sb rounded-[12px] px-4 py-1.5 text-center text-[16px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Custom date</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap  -mx-2 md:max-w-[96.5%]">
                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Engagements</h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>51</h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon1} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>New Learners</h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>130</h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon2} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Returning Learners</h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>470</h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon3} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Time spent </h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>470 <span className='text-[16px] text-[#B3B1C9]'>min</span></h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon4} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Average Rating</h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>4.7 <span className='text-[16px] text-[#B3B1C9]'>(13 reviews)</span></h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon5} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                        <div className="card shadow-h rounded-[12px] bg-white px-6 py-6">
                            <div className="flex items-start">
                                <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                                <div className="flex-grow">
                                    <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Performance Indicator</h4>
                                    <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>+0.7</h3>
                                </div>
                                <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                    <img src={DasboardIcon6} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


                <div className='px-2 mt-[20px]'>

                    <div className="flex flex-wrap  -mx-2 md:max-w-[98.5%]">

                        <div className="w-full md:w-1/2 xs:w-1/1 mb-[34px] px-2">
                            <div className="card shadow-h rounded-[32px] bg-white px-6 py-6 rounded-[32px]">
                                <h4 className='fn text-[#321841] fw-b text-[20px] mb-[20px]'>Longest duration Engagements</h4>
                                {/* Accordion 1 */}
                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(0)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>1</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[0] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[0] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 1 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                {/* Accordion 2 */}
                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(1)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>2</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[1] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[1] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 2 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(11)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>2</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[11] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[11] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 2 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(12)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>2</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[12] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[12] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 2 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>



                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xs:w-1/1 mb-[34px] px-2">
                            <div className="card shadow-h rounded-[32px] bg-white px-6 py-6">
                                <h4 className='fn text-[#321841] fw-b text-[20px] mb-[20px]'>Highest rated engagments</h4>
                                {/* Accordion 3 */}
                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(2)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>3</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[2] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[2] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 3 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                {/* Accordion 4 */}
                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(3)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>4</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[3] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[3] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 4 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(33)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>4</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[33] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[33] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 4 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>

                                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                                    <div
                                        className="cursor-pointer flex items-center justify-between"
                                        onClick={() => toggleAccordion(34)}
                                    >
                                        <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>4</span> Lorem ipsum dolor?</div>
                                        <div className="transform rotate-0">
                                            {accordionState[34] ? (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                                        <path d="M15 1.5L8 8.5L1 1.5" stroke="#19212A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {accordionState[34] && (
                                        <div className='py-6 px-6'>
                                            {/* Accordion 4 content */}
                                            <p className="text-[14px] fn fw-r text-[#212D38]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                                            </p>
                                            {/* Add more content as needed */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    )
}
