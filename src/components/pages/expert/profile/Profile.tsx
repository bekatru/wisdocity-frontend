import { useState } from 'react';
import { Input, Label } from "components";
import ProfileIcon from "../../../../assets/profile/profile-user.png";
import EditIcon from "../../../../assets/profile/icon-edit.svg";

export function Profile() {
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

                        <div className="box-body  mb-[32px]">
                            <div className="flex align-center w-full">
                                <div className="me-0">
                                    <span className="avatar avatar-rounded">
                                        <img src={ProfileIcon} alt="" />
                                    </span>
                                </div>
                                <div className="pl-[24px]">
                                    <div className="text-[24px] fn fw-sb text-[#321841] mb-0">John Wilson</div>
                                    <p className="text-[14px] fn fw-m text-[#321841] mb-[5px]">Investment Expert</p>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8726b9" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8726b9" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8726b9" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8726b9" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8726b9" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>

                                        <span className="ms-[8px] mt-[3px] text-[14px] fn fw-m text-[#6B6985]">4.8 (20 reviews)</span>
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <button className="text-black">
                                        <img src={EditIcon} alt="Edit" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box-body mb-[32px]">
                            <div className="flex align-center w-full">
                                <div className="">
                                    <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">Contacts</div>

                                    <p className="text-[14px] fn fw-r text-[#321841] mb-[10px]">
                                        <div className='float-left mr-[14px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                <path d="M18.7444 14.7726L19.2073 15.2381L18.7435 14.7726H18.7444ZM7.71415 12.8861L8.17615 12.4206L7.71328 12.8861H7.71415ZM4.1039 3.61812L3.6419 3.1535L4.10478 3.619L4.1039 3.61812ZM14.5497 12.1546L14.9495 11.7582L14.0229 10.8272L13.6257 11.2236L14.5497 12.1546ZM16.2874 11.592L17.9595 12.5011L18.5852 11.3479L16.9139 10.4396L16.2874 11.592ZM18.2807 14.3071L17.0382 15.5435L17.963 16.4736L19.2055 15.2381L18.2807 14.3071ZM16.2804 15.9407C15.0117 16.0597 11.7304 15.9539 8.17615 12.4206L7.2504 13.3507C11.1284 17.2069 14.82 17.3959 16.4029 17.248L16.2795 15.9407H16.2804ZM8.17615 12.4206C4.78903 9.05187 4.22728 6.2195 4.15728 4.99012L2.84653 5.0645C2.93403 6.6115 3.62965 9.751 7.2504 13.3507L8.17615 12.4206ZM9.37928 7.01312L9.6304 6.76287L8.7064 5.83275L8.45528 6.08212L9.38015 7.01225L9.37928 7.01312ZM9.8299 3.58225L8.7274 2.10875L7.67653 2.89625L8.77903 4.36887L9.8299 3.58225ZM5.01653 1.78762L3.64278 3.15262L4.56853 4.08362L5.9414 2.71862L5.01653 1.78762ZM8.91728 6.54762C8.45353 6.08212 8.45353 6.08212 8.45353 6.08387H8.45178L8.44915 6.08737C8.40784 6.12954 8.37063 6.17553 8.33803 6.22475C8.29078 6.29475 8.23915 6.38662 8.1954 6.503C8.08885 6.8034 8.06232 7.12636 8.1184 7.44012C8.23565 8.197 8.75715 9.19712 10.0924 10.5254L11.0182 9.59437C9.76778 8.35187 9.47028 7.59587 9.41515 7.23887C9.3889 7.06912 9.41603 6.98512 9.4239 6.96587C9.42828 6.95362 9.43003 6.95275 9.4239 6.96062C9.41619 6.97275 9.4074 6.98418 9.39765 6.99475L9.3889 7.0035C9.38607 7.00622 9.38315 7.00884 9.38015 7.01137L8.9164 6.54762H8.91728ZM10.0924 10.5254C11.4285 11.8536 12.4339 12.3716 13.1917 12.4871C13.5793 12.5466 13.8917 12.4994 14.1288 12.411C14.2614 12.3619 14.3854 12.2922 14.4963 12.2045C14.5113 12.1919 14.5259 12.1788 14.54 12.1651L14.5462 12.1599L14.5488 12.1572L14.5497 12.1555C14.5497 12.1555 14.5505 12.1546 14.0877 11.6891C13.6239 11.2236 13.6265 11.2227 13.6265 11.2227L13.6283 11.221L13.63 11.2192L13.6353 11.2149L13.644 11.2061C13.6545 11.1967 13.6657 11.1879 13.6773 11.1799C13.686 11.1737 13.6834 11.1764 13.6712 11.1816C13.6493 11.1895 13.5635 11.2166 13.3912 11.1904C13.0289 11.1344 12.2677 10.8369 11.0182 9.59437L10.0924 10.5254ZM8.7274 2.10787C7.8349 0.91787 6.0814 0.72887 5.01653 1.78762L5.9414 2.71862C6.4069 2.25575 7.2329 2.30387 7.67653 2.89625L8.72653 2.10787H8.7274ZM4.15815 4.991C4.14065 4.68825 4.27978 4.3715 4.56853 4.0845L3.6419 3.1535C3.17203 3.62075 2.8019 4.28225 2.84653 5.0645L4.15815 4.991ZM17.0382 15.5435C16.7984 15.7832 16.5394 15.918 16.2813 15.9416L16.4029 17.248C17.046 17.1876 17.5719 16.8639 17.9639 16.4745L17.0382 15.5435ZM9.6304 6.76287C10.4923 5.90625 10.5562 4.55262 9.83078 3.58312L8.7799 4.36975C9.13253 4.84137 9.08003 5.46 8.70553 5.83362L9.6304 6.76287ZM17.9604 12.502C18.6753 12.8905 18.7864 13.8057 18.2815 14.308L19.2073 15.2381C20.3798 14.0717 20.0184 12.1266 18.586 11.3487L17.9604 12.502ZM14.9495 11.7591C15.2855 11.4249 15.8263 11.3426 16.2883 11.5929L16.9148 10.4405C15.9663 9.92425 14.7903 10.0669 14.0238 10.8281L14.9495 11.7591Z" fill="#321841" />
                                            </svg>
                                        </div>
                                        080 - 789 - 78-78
                                    </p>

                                    <p className="text-[14px] fn fw-r text-[#321841] mb-[10px]">
                                        <div className='float-left mr-[14px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                <path d="M19.25 5.25C19.25 4.2875 18.4625 3.5 17.5 3.5H3.5C2.5375 3.5 1.75 4.2875 1.75 5.25V15.75C1.75 16.7125 2.5375 17.5 3.5 17.5H17.5C18.4625 17.5 19.25 16.7125 19.25 15.75V5.25ZM17.5 5.25L10.5 9.61625L3.5 5.25H17.5ZM17.5 15.75H3.5V7L10.5 11.375L17.5 7V15.75Z" fill="#321841" />
                                            </svg>
                                        </div>
                                        example@mail.com
                                    </p>

                                    <p className="text-[14px] fn fw-r text-[#321841] mb-[10px]">
                                        <div className='float-left mr-[14px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 5C9.38193 5 8.77775 5.18328 8.26384 5.52666C7.74994 5.87004 7.3494 6.3581 7.11288 6.92911C6.87635 7.50013 6.81447 8.12847 6.93505 8.73466C7.05562 9.34085 7.35325 9.89767 7.79029 10.3347C8.22733 10.7717 8.78415 11.0694 9.39034 11.19C9.99653 11.3105 10.6249 11.2486 11.1959 11.0121C11.7669 10.7756 12.255 10.3751 12.5983 9.86116C12.9417 9.34725 13.125 8.74307 13.125 8.125C13.125 7.2962 12.7958 6.50134 12.2097 5.91529C11.6237 5.32924 10.8288 5 10 5ZM10 10C9.62916 10 9.26665 9.89003 8.95831 9.68401C8.64996 9.47798 8.40964 9.18514 8.26773 8.84253C8.12581 8.49992 8.08868 8.12292 8.16103 7.75921C8.23337 7.39549 8.41195 7.0614 8.67417 6.79917C8.9364 6.53695 9.27049 6.35837 9.63421 6.28603C9.99792 6.21368 10.3749 6.25081 10.7175 6.39273C11.0601 6.53464 11.353 6.77496 11.559 7.08331C11.765 7.39165 11.875 7.75416 11.875 8.125C11.875 8.62228 11.6775 9.09919 11.3258 9.45083C10.9742 9.80246 10.4973 10 10 10ZM10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 10.5781 4.25859 13.1781 6.40625 15.6445C7.37127 16.759 8.45739 17.7626 9.64453 18.6367C9.74962 18.7103 9.87482 18.7498 10.0031 18.7498C10.1314 18.7498 10.2566 18.7103 10.3617 18.6367C11.5467 17.7623 12.6307 16.7587 13.5938 15.6445C15.7383 13.1781 16.875 10.5781 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 17.3438C8.70859 16.3281 4.375 12.5977 4.375 8.125C4.375 6.63316 4.96763 5.20242 6.02252 4.14752C7.07742 3.09263 8.50816 2.5 10 2.5C11.4918 2.5 12.9226 3.09263 13.9775 4.14752C15.0324 5.20242 15.625 6.63316 15.625 8.125C15.625 12.5961 11.2914 16.3281 10 17.3438Z" fill="#321841" />
                                            </svg>
                                        </div>
                                        Ranchview Dr. Richardson, California 62639
                                    </p>

                                </div>
                                <div className="ms-auto">
                                    <button className="text-black">
                                        <img src={EditIcon} alt="Edit" />
                                    </button>
                                </div>
                            </div>
                        </div>


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
