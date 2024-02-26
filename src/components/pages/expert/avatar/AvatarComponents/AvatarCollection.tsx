import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import StarIcon from '../../../../../assets/expert-avatar/star.png';



export function AvatarCollection() {

    return (
        <>
           <div className="box-body  mb-[10px]">
                    <h4 className="fn fw-b text-[16px] text-[#321841] mb-[24px]">Avatar Wisdom Collections</h4>
                    <div className="flex flex-wrap  -mx-4 md:max-w-[100%]">
                        <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
                            <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                                <div className="flex justify-between items-center w-full">
                                    <h4 className="fn fw-sb text-[18px] text-[#321841] mt-[1px]">Books Collection</h4>
                                    <div className="flex items-center">
                                        <img className="mr-2" src={StarIcon} alt="" />
                                        <MyDropdown />
                                    </div>
                                </div>

                                <div className="rounded-[8px]">
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
                                        <MyDropdown />
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
                                        <MyDropdown />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    New File
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    New Link
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    New Record
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    New Tag
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    Delete collection
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}