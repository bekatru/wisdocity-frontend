import { useState, useEffect, useRef } from 'react';

import { EditModal } from './EditModal';

import AvatarIcon from "../../../../assets/expert-avatar/ai-avatar.png";
import StarIcon from "../../../../assets/expert-avatar/star.png";
import DotsIcon from "../../../../assets/expert-avatar/dots.png";
import EditIcon from "../../../../assets/profile/icon-edit.svg";


export function AvatarCard() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='flex-row-reverse -mt-[72px] mb-[100px]'>
                <button type="button" className="text-[#64108F] bg-none fn fw-sb rounded-full px-10 py-2 text-center text-[16px] border border-[#64108F] mb-4 flex float-right">Test avatar</button>
            </div>

            <div className="w-full card shadow-p bg-white px-6 py-6">
                <div className="box-body  mb-[42px]">
                    <div className="flex align-center w-full">
                        <div className="me-0">
                            <span className="avatar avatar-rounded">
                                <img src={AvatarIcon} alt="" />
                            </span>
                        </div>
                        <div className="pl-[24px]">
                            <div className="text-[24px] fn fw-sb text-[#17192B] mt-[17px]">John Wilson</div>
                        </div>
                        <div className="ms-auto">
                            <EditModal/>
                            {/* <button className="text-black">
                                <img src={EditIcon} alt="Edit" />
                            </button> */}
                        </div>
                    </div>
                </div>

                <div className="box-body  mb-[32px]">
                    <h4 className='fn fw-b text-[16px] text-[#321841] mb-[24px]'>Avatar Wisdom Collections</h4>
                    <div className="flex flex-wrap  -mx-4 md:max-w-[100%]">
                        <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                            <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                                <div className="flex justify-between items-center w-full">
                                    <h4 className='fn fw-sb text-[18px] text-[#321841] mt-[1px]'>Books Collection</h4>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={StarIcon} alt="" />
                                        <div className="relative flex">
                                            <button
                                                onClick={toggleDropdown}
                                                type="button"
                                                className=""
                                                id="options-menu"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                <img src={DotsIcon} alt="" />
                                            </button>

                                            {isOpen && (
                                                <div
                                                    ref={dropdownRef}
                                                    className="absolute right-0 w-48 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-[8px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="options-menu"
                                                >
                                                    {/* Dropdown items */}
                                                    <div className="py-0" role="none">
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 fn fw-m text-[14px] hover:bg-[#F6E3FF] hover:text-[#64108F]"
                                                            role="menuitem"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>
                                                                <div>New file</div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 fn fw-m text-[14px] hover:bg-[#F6E3FF] hover:text-[#64108F]"
                                                            role="menuitem"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>
                                                                <div>New link</div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 fn fw-m text-[14px] hover:bg-[#F6E3FF] hover:text-[#64108F]"
                                                            role="menuitem"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>
                                                                <div>New record</div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 fn fw-m text-[14px] hover:bg-[#F6E3FF] hover:text-[#64108F]"
                                                            role="menuitem"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>
                                                                <div>New tag</div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 fn fw-m text-[14px] hover:bg-[#F6E3FF] hover:text-[#64108F]"
                                                            role="menuitem"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                </svg>
                                                                <div>Delete collection</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-[8px]'>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Invesment</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Career</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Design</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">AI</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Books</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Guidelines</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                            <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                                <div className="flex justify-between items-center w-full">
                                    <h4 className='fn fw-sb text-[18px] text-[#321841] mt-[1px]'>Interviews</h4>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={StarIcon} alt="" />
                                        <img src={DotsIcon} alt="" />
                                    </div>
                                </div>

                                <div className='rounded-[8px]'>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Invesment</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Career</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Design</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">AI</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Books</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Guidelines</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                            <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                                <div className="flex justify-between items-center w-full">
                                    <h4 className='fn fw-sb text-[18px] text-[#321841] mt-[1px]'>Guidelines</h4>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={StarIcon} alt="" />
                                        <img src={DotsIcon} alt="" />
                                    </div>
                                </div>

                                <div className='rounded-[8px]'>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Invesment</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Career</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Design</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">AI</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Books</button>
                                    <button type="button" className="text-[#321841] bg-[#F1E8F8] fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4">Guidelines</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
