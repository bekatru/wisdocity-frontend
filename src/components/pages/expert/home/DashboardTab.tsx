import { useState } from 'react';
import { TimeChart } from './graphs/TimeGraph';

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
            <div className='sorting-content'>
                <div className="flex align-center w-full">
                    <div className="px-2">
                        <button type="button" className="text-[#6B6985] bg-white fn fw-r rounded-full px-4 py-1 text-center text-[14px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">24 hours</button>
                        <button type="button" className="text-[#6B6985] bg-white fn fw-r rounded-full px-4 py-1 text-center text-[14px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">3 Days</button>
                        <button type="button" className="text-[#6B6985] bg-white fn fw-r rounded-full px-4 py-1 text-center text-[14px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Last week</button>
                        <button type="button" className="text-[#6B6985] bg-white fn fw-r rounded-full px-4 py-1 text-center text-[14px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Last month</button>
                        <button type="button" className="text-[#6B6985] bg-white fn fw-r rounded-full px-4 py-1 text-center text-[14px] mt-[1px] mr-[12px] mb-6 border border-[#B3B1C9]">Custom date</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap  -mx-2 md:max-w-[96.5%]">
                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                    <div className="card shadow-p bg-white px-6 py-6">
                        <div className="flex items-start">
                            <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                            <div className="flex-grow">
                                <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Dialogues start</h4>
                                <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>51</h3>
                            </div>
                            <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                <img src={DasboardIcon1} alt='' />
                            </div>
                        </div>
                        <div className='value-col flex fn fw-rs text-[14px] text-[#16920C]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.47221 2.92395C8.34719 2.79897 8.17766 2.72876 8.00088 2.72876C7.8241 2.72876 7.65456 2.79897 7.52955 2.92395L3.75821 6.69528C3.69454 6.75678 3.64375 6.83035 3.60881 6.91168C3.57387 6.99302 3.55548 7.0805 3.55471 7.16902C3.55394 7.25754 3.57081 7.34532 3.60433 7.42725C3.63785 7.50918 3.68735 7.58362 3.74995 7.64621C3.81254 7.70881 3.88698 7.75831 3.96891 7.79183C4.05084 7.82535 4.13863 7.84222 4.22715 7.84145C4.31567 7.84068 4.40315 7.82229 4.48448 7.78735C4.56582 7.75241 4.63938 7.70162 4.70088 7.63795L7.33421 5.00462V13.8333C7.33421 14.0101 7.40445 14.1797 7.52948 14.3047C7.6545 14.4297 7.82407 14.5 8.00088 14.5C8.17769 14.5 8.34726 14.4297 8.47228 14.3047C8.59731 14.1797 8.66755 14.0101 8.66755 13.8333V5.00462L11.3009 7.63795C11.4266 7.75939 11.595 7.82659 11.7698 7.82507C11.9446 7.82355 12.1118 7.75344 12.2354 7.62983C12.359 7.50622 12.4291 7.33902 12.4307 7.16422C12.4322 6.98942 12.365 6.82102 12.2435 6.69528L8.47221 2.92395Z" fill="#16920C" />
                            </svg>
                            <p>+6.5% since last week</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                    <div className="card shadow-p bg-white px-6 py-6">
                        <div className="flex items-start">
                            <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                            <div className="flex-grow">
                                <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Messages from avatar</h4>
                                <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>130</h3>
                            </div>
                            <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                <img src={DasboardIcon2} alt='' />
                            </div>
                        </div>
                        <div className='value-col flex fn fw-rs text-[14px] text-[#16920C]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.47221 2.92395C8.34719 2.79897 8.17766 2.72876 8.00088 2.72876C7.8241 2.72876 7.65456 2.79897 7.52955 2.92395L3.75821 6.69528C3.69454 6.75678 3.64375 6.83035 3.60881 6.91168C3.57387 6.99302 3.55548 7.0805 3.55471 7.16902C3.55394 7.25754 3.57081 7.34532 3.60433 7.42725C3.63785 7.50918 3.68735 7.58362 3.74995 7.64621C3.81254 7.70881 3.88698 7.75831 3.96891 7.79183C4.05084 7.82535 4.13863 7.84222 4.22715 7.84145C4.31567 7.84068 4.40315 7.82229 4.48448 7.78735C4.56582 7.75241 4.63938 7.70162 4.70088 7.63795L7.33421 5.00462V13.8333C7.33421 14.0101 7.40445 14.1797 7.52948 14.3047C7.6545 14.4297 7.82407 14.5 8.00088 14.5C8.17769 14.5 8.34726 14.4297 8.47228 14.3047C8.59731 14.1797 8.66755 14.0101 8.66755 13.8333V5.00462L11.3009 7.63795C11.4266 7.75939 11.595 7.82659 11.7698 7.82507C11.9446 7.82355 12.1118 7.75344 12.2354 7.62983C12.359 7.50622 12.4291 7.33902 12.4307 7.16422C12.4322 6.98942 12.365 6.82102 12.2435 6.69528L8.47221 2.92395Z" fill="#16920C" />
                            </svg>
                            <p>+11% since last week</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                    <div className="card shadow-p bg-white px-6 py-6">
                        <div className="flex items-start">
                            <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                            <div className="flex-grow">
                                <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Average messages</h4>
                                <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>470</h3>
                            </div>
                            <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                <img src={DasboardIcon3} alt='' />
                            </div>
                        </div>
                        <div className='value-col flex fn fw-rs text-[14px] text-[#EB0000]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M7.52779 14.076C7.65281 14.201 7.82234 14.2712 7.99912 14.2712C8.1759 14.2712 8.34544 14.201 8.47045 14.076L12.2418 10.3047C12.3055 10.2432 12.3562 10.1697 12.3912 10.0883C12.4261 10.007 12.4445 9.9195 12.4453 9.83098C12.4461 9.74246 12.4292 9.65468 12.3957 9.57275C12.3621 9.49082 12.3126 9.41638 12.2501 9.35379C12.1875 9.29119 12.113 9.24169 12.0311 9.20817C11.9492 9.17465 11.8614 9.15778 11.7729 9.15855C11.6843 9.15932 11.5969 9.17771 11.5155 9.21265C11.4342 9.24759 11.3606 9.29838 11.2991 9.36205L8.66579 11.9954L8.66579 3.16672C8.66579 2.98991 8.59555 2.82034 8.47053 2.69531C8.3455 2.57029 8.17593 2.50005 7.99912 2.50005C7.82231 2.50005 7.65274 2.57029 7.52772 2.69531C7.40269 2.82033 7.33245 2.9899 7.33245 3.16672L7.33245 11.9954L4.69912 9.36205C4.57339 9.24061 4.40498 9.17341 4.23019 9.17493C4.05539 9.17645 3.88818 9.24656 3.76457 9.37017C3.64097 9.49377 3.57086 9.66098 3.56934 9.83578C3.56782 10.0106 3.63501 10.179 3.75645 10.3047L7.52779 14.076Z" fill="#EB0000" />
                            </svg>
                            <p>+11% since last week</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                    <div className="card shadow-p bg-white px-6 py-6">
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
                        <div className='value-col flex fn fw-rs text-[14px] text-[#16920C]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.47221 2.92395C8.34719 2.79897 8.17766 2.72876 8.00088 2.72876C7.8241 2.72876 7.65456 2.79897 7.52955 2.92395L3.75821 6.69528C3.69454 6.75678 3.64375 6.83035 3.60881 6.91168C3.57387 6.99302 3.55548 7.0805 3.55471 7.16902C3.55394 7.25754 3.57081 7.34532 3.60433 7.42725C3.63785 7.50918 3.68735 7.58362 3.74995 7.64621C3.81254 7.70881 3.88698 7.75831 3.96891 7.79183C4.05084 7.82535 4.13863 7.84222 4.22715 7.84145C4.31567 7.84068 4.40315 7.82229 4.48448 7.78735C4.56582 7.75241 4.63938 7.70162 4.70088 7.63795L7.33421 5.00462V13.8333C7.33421 14.0101 7.40445 14.1797 7.52948 14.3047C7.6545 14.4297 7.82407 14.5 8.00088 14.5C8.17769 14.5 8.34726 14.4297 8.47228 14.3047C8.59731 14.1797 8.66755 14.0101 8.66755 13.8333V5.00462L11.3009 7.63795C11.4266 7.75939 11.595 7.82659 11.7698 7.82507C11.9446 7.82355 12.1118 7.75344 12.2354 7.62983C12.359 7.50622 12.4291 7.33902 12.4307 7.16422C12.4322 6.98942 12.365 6.82102 12.2435 6.69528L8.47221 2.92395Z" fill="#16920C" />
                            </svg>
                            <p>+6.5% since last week</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                    <div className="card shadow-p bg-white px-6 py-6">
                        <div className="flex items-start">
                            <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                            <div className="flex-grow">
                                <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Average rate</h4>
                                <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[20px]'>4.7 <span className='text-[16px] text-[#B3B1C9]'>(13 reviews)</span></h3>
                            </div>
                            <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                <img src={DasboardIcon5} alt='' />
                            </div>
                        </div>
                        <div className='value-col flex fn fw-rs text-[14px] text-[#16920C]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path d="M8.47221 2.92395C8.34719 2.79897 8.17766 2.72876 8.00088 2.72876C7.8241 2.72876 7.65456 2.79897 7.52955 2.92395L3.75821 6.69528C3.69454 6.75678 3.64375 6.83035 3.60881 6.91168C3.57387 6.99302 3.55548 7.0805 3.55471 7.16902C3.55394 7.25754 3.57081 7.34532 3.60433 7.42725C3.63785 7.50918 3.68735 7.58362 3.74995 7.64621C3.81254 7.70881 3.88698 7.75831 3.96891 7.79183C4.05084 7.82535 4.13863 7.84222 4.22715 7.84145C4.31567 7.84068 4.40315 7.82229 4.48448 7.78735C4.56582 7.75241 4.63938 7.70162 4.70088 7.63795L7.33421 5.00462V13.8333C7.33421 14.0101 7.40445 14.1797 7.52948 14.3047C7.6545 14.4297 7.82407 14.5 8.00088 14.5C8.17769 14.5 8.34726 14.4297 8.47228 14.3047C8.59731 14.1797 8.66755 14.0101 8.66755 13.8333V5.00462L11.3009 7.63795C11.4266 7.75939 11.595 7.82659 11.7698 7.82507C11.9446 7.82355 12.1118 7.75344 12.2354 7.62983C12.359 7.50622 12.4291 7.33902 12.4307 7.16422C12.4322 6.98942 12.365 6.82102 12.2435 6.69528L8.47221 2.92395Z" fill="#16920C" />
                            </svg>
                            <p>+11% since last week</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px]  px-4">
                    <div className="card shadow-p bg-white px-6 py-6 pb-[0px]">
                        <div className="flex items-start">
                            <div className="mr-[24px] rounded-[20px] border-[#8726B9] border-[3px] h-16"></div>
                            <div className="flex-grow">
                                <h4 className='fn fw-sb text-[16px] text-[#321841] mt-[1px]'>Pick activity times</h4>
                                <h3 className='fn fw-sb text-[32px] text-[#321841] mb-[0px]'>51</h3>
                            </div>
                            <div className='rounded-[8px] bg-[#f6e3ff9c] py-2 px-2'>
                                <img src={DasboardIcon6} alt='' />
                            </div>
                        </div>
                        <div className='-mt-[45px]'>
                        <TimeChart/>
                        </div>
                    </div>
                </div>




            </div>


            <div className='px-2'>
                <div className="card shadow-p bg-white px-6 py-6 md:max-w-[95.5%]">
                    <h4 className='fn text-[#321841] fw-b text-[20px] mb-[16px]'>Top 10 questions</h4>
                    <div className='flex w-full'>
                        <div className="w-full md:w-1/2 md:mr-[35px] mb-[34px]">
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
                        <div className="w-full md:w-1/2 md:mr-[35px] mb-[34px]">
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

        </>
    )
}
