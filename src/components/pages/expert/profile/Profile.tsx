import { useState } from 'react';
import { Input, Label } from "components";
import EditIcon from "../../../../assets/profile/icon-edit.svg";
import { useExpertProfile} from 'modules/auth';
import ProfileInformation from './profileComponent/ProfileInformation';
import ProfileContact from './profileComponent/ProfileContact';

export function Profile() {
    const expert_profile = useExpertProfile();
    
    const [accordionState, setAccordionState] = useState([false, false, false, false]);

    // Function to toggle the open/close state of a specific accordion
    const toggleAccordion = (index: number) => {
        const newState = [...accordionState];
        newState[index] = !newState[index];
        setAccordionState(newState);
      };

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 xs:w-1/1 md:mr-[35px] mb-[34px]">
                    <div className="card shadow-p bg-white px-6 py-6">

                    {/* profile information section     */}
                    {expert_profile.data &&  (
                        <>
                        
                    <ProfileInformation username={expert_profile.data.username} profession={expert_profile.data.profession}/>
                    <ProfileContact contactNumber={expert_profile.data.contactNumber} email={expert_profile.data.email} address={expert_profile.data.address}/>

                    </>)}

                       
 
                       


                        <div className="box-body mb-[32px]">
                            <div className="flex align-center w-full">
                                <div className="">
                                    <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">Bio</div>

                                    <p className="text-[14px] fn fw-r text-[#6B6985] mb-[10px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.
                                    </p>

                                    <p className="text-[14px] fn fw-r text-[#6B6985] mb-[10px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                </div>
                                <div className="ms-auto min-w-[24px] min-h-[24px]">
                                    <button className="text-black">
                                        <img src={EditIcon} alt="Edit" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box-body mb-[32px]">
                            <div className="flex align-center w-full">
                                <div className="">
                                    <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">Social media</div>

                                    <p className="text-[14px] fn fw-r text-[#321841] mb-[10px]">
                                        LinkedIn
                                    </p>

                                </div>
                                <div className="ms-auto min-w-[24px] min-h-[24px]">
                                    <button className="text-black">
                                        <img src={EditIcon} alt="Edit" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box-body">
                            <div className="flex align-center w-full">
                                <div className="">
                                    <div className="text-[16px] fn fw-sb text-[#321841] mb-[18px]">Category</div>

                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4">Invesment</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4">Career</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4">Mentorship</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4">Couching</button>

                                </div>
                                <div className="ms-auto min-w-[24px] min-h-[24px]">
                                    <button className="text-black">
                                        <img src={EditIcon} alt="Edit" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="card shadow-p bg-white px-6 py-6  mb-[34px]">

                        <div className="box-body">
                            <div className="flex align-center w-full">
                                <div className="w-full">
                                    <div className="flex items-start text-[20px] fn fw-b text-[#321841] mb-[24px]">Live Chat
                                        <Label className="relative inline-flex items-center cursor-pointer ml-[40px] mt-[1px]">
                                            <Input type="checkbox" value="" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </Label>
                                    </div>


                                    <p className="w-full text-[16px] fn fw-sb text-[#321841] mb-[0px]">
                                        Calendar Link:<strong> https://meet.google.com/oyb-oamu-qvh</strong>
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
                                    <div className="flex items-start text-[20px] fn fw-b text-[#321841] mb-[24px]">Workshops
                                        <label className="relative inline-flex items-center cursor-pointer ml-[40px] mt-[1px]">
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>


                                    <p className="w-full text-[16px] fn fw-sb text-[#6B6985] mb-[14px]">
                                        Calendar link:
                                    </p>

                                    <form>
                                        <div className="flex">
                                        <input type="search" id="search" className="h-12 min-w-[82%] border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Interviews" required />
                                            <button type="submit" className="text-white bg-btn-theme fn fw-sb rounded-full px-8 py-3 text-center text-[16px] ml-[10px] float-right">Save</button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card shadow-p bg-white px-6 py-6 md:max-w-[90%]">
                <h4 className='fn text-[#321841] fw-b text-[20px] mb-[16px]'>Frequently Asked Questions</h4>
                <div className='flex w-full'>
                    <div className="w-full md:w-1/2 md:mr-[35px] mb-[34px]">
                        {/* Accordion 1 */}
                        <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                            <div
                                className="cursor-pointer flex items-center justify-between"
                                onClick={() => toggleAccordion(0)}
                            >
                                <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>1</span> How does a 1:1 consultation work?</div>
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
                                <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>2</span> How long are the session?</div>
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


                    </div>
                    <div className="w-full md:w-1/2 md:mr-[35px] mb-[34px]">
                        {/* Accordion 3 */}
                        <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px]">
                            <div
                                className="cursor-pointer flex items-center justify-between"
                                onClick={() => toggleAccordion(2)}
                            >
                                <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>3</span> Can i reschedule or cancel my session</div>
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
                                <div className="text-[14px] fn fw-sb text-[#17192B]"><span className='mr-[12px]'>4</span> How much can we accomplish in a virtual session</div>
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



                    </div>
                </div>

            </div>



        </>
    )
}



