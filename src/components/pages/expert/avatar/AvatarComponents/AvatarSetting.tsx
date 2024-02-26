import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from "@heroicons/react/20/solid";

import RecIcon from "../../../../../assets/expert-avatar/rec-icon.png"
import { Switch } from '@headlessui/react';



export function AvatarSetting() {
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);

  return (
    <>
      <div className="w-full card shadow-h rounded-[32px] bg-white px-6 py-6 max-w-[70%]">

      <div className="box-body  mb-[32px]">
          <h4 className="fn fw-b text-[16px] text-[#321841] mb-[24px]">Enable </h4>
          <div className="flex flex-wrap  -mx-4">

            <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
              <div className="flex flex-wrap  mb-[15px]">
                <Switch
                  checked={enabled1}
                  onChange={setEnabled1}
                  className={`${enabled1 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span aria-hidden="true" className={`${enabled1 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                </Switch>
                <p className='text-[18px] fn fw-b text-[#321841] pl-[18px]'>Avatar Chat</p>
              </div>
              <p className='text-[16px] fn fw-sb text-[#6B6985]'>Enables your avatar to engage with Wisdocity learners.</p>
            </div>


            <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
              <div className="flex flex-wrap items-center mb-[15px]">
                <Switch
                  checked={enabled2}
                  onChange={setEnabled2}
                  className={`${enabled2 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span aria-hidden="true" className={`${enabled2 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                </Switch>
                <p className='text-[18px] fn fw-b text-[#321841] pl-[18px]'>Link Integration</p>
              </div>
              <p className='text-[16px] fn fw-sb text-[#6B6985]'>Enables adding a link on external platforms, directing learners to Wisdocity to interact with your avatar.</p>
            </div>


            <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
              <div className="flex flex-wrap items-center mb-[15px]">
                <Switch
                  checked={enabled3}
                  onChange={setEnabled3}
                  className={`${enabled3 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span aria-hidden="true" className={`${enabled3 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                </Switch>
                <p className='text-[18px] fn fw-b text-[#321841] pl-[18px]'>Collaborative Expert Chat</p>
              </div>
              <p className='text-[16px] fn fw-sb text-[#6B6985]'>Allows learners to seek help from other experts while interacting with your avatar.</p>
            </div>

          </div>

        </div>

        
        <div className="box-body  mb-[10px]">
          <h4 className="flex fn fw-b text-[20px] text-[#321841] mb-[24px]"
          >Audio and Video Samples 
          <PlusIcon className="h-6 w-6 text-[#321841] ml-[10px] mt-[3px]" />
          </h4>
          <div className="flex flex-wrap  -mx-4 md:max-w-[100%]">

            <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
              <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                <div className="flex justify-between items-center w-full">
                  <h4 className="fn fw-sb text-[18px] text-[#321841] mt-[1px]">Voice</h4>
                  <div className="flex items-center">
                    <MyDropdown />
                  </div>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className='flex'>
                    <img src={RecIcon} alt='' />
                    <p className="text-[#321841] fn fw-r rounded-full px-2 py-1 text-center text-[14px] mr-[10px] ml-[7px]">Invesment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 xs:w-1/1 mb-[34px] px-4">
              <div className="card bg-white px-6 py-6 border-[#D9D9EB] border-[1px] rounded-[12px]">
                <div className="flex justify-between items-center w-full">
                  <h4 className="fn fw-sb text-[18px] text-[#321841] mt-[1px]">Video</h4>
                  <div className="flex items-center">
                    <MyDropdown />
                  </div>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className='flex'>
                    <img src={RecIcon} alt='' />
                    <p className="text-[#321841] fn fw-r rounded-full px-2 py-1 text-center text-[14px] mr-[10px] ml-[7px]">Video</p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>

                  Play
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'block px-4 py-2 fn fw-m text-[14px] text-[#321841] hover:bg-[#F6E3FF] hover:text-[#64108F]'} group flex w-full items-center px-4 py-2 text-sm`}

                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={.7} stroke="currentColor" className='w-6 h-6 mr-2'>
                    <path d="M10 2.03125C8.42393 2.03125 6.88326 2.49861 5.5728 3.37423C4.26235 4.24984 3.24097 5.49439 2.63784 6.95049C2.0347 8.40659 1.87689 10.0088 2.18437 11.5546C2.49185 13.1004 3.2508 14.5203 4.36525 15.6348C5.4797 16.7492 6.89959 17.5082 8.44538 17.8156C9.99116 18.1231 11.5934 17.9653 13.0495 17.3622C14.5056 16.759 15.7502 15.7377 16.6258 14.4272C17.5014 13.1167 17.9688 11.5761 17.9688 10C17.9663 7.88732 17.1259 5.86188 15.632 4.36798C14.1381 2.87409 12.1127 2.03373 10 2.03125ZM10 17.0312C8.60935 17.0312 7.24993 16.6189 6.09365 15.8463C4.93737 15.0737 4.03615 13.9755 3.50398 12.6907C2.9718 11.406 2.83255 9.9922 3.10386 8.62827C3.37516 7.26434 4.04482 6.01149 5.02816 5.02816C6.0115 4.04482 7.26435 3.37516 8.62827 3.10385C9.9922 2.83255 11.406 2.97179 12.6907 3.50397C13.9755 4.03615 15.0737 4.93736 15.8463 6.09365C16.6189 7.24993 17.0313 8.60935 17.0313 10C17.0292 11.8642 16.2877 13.6514 14.9696 14.9696C13.6514 16.2877 11.8642 17.0292 10 17.0312ZM10 4.53125C8.91839 4.53125 7.86106 4.85199 6.96173 5.4529C6.0624 6.05381 5.36145 6.90792 4.94754 7.9072C4.53362 8.90648 4.42532 10.0061 4.63633 11.0669C4.84735 12.1277 5.3682 13.1022 6.13301 13.867C6.89783 14.6318 7.87227 15.1527 8.9331 15.3637C9.99394 15.5747 11.0935 15.4664 12.0928 15.0525C13.0921 14.6385 13.9462 13.9376 14.5471 13.0383C15.148 12.1389 15.4688 11.0816 15.4688 10C15.4671 8.55011 14.8904 7.16007 13.8652 6.13484C12.8399 5.10961 11.4499 4.5329 10 4.53125ZM10 14.5312C9.10381 14.5312 8.22774 14.2655 7.48258 13.7676C6.73742 13.2697 6.15663 12.562 5.81367 11.734C5.47071 10.9061 5.38098 9.99497 5.55582 9.116C5.73066 8.23702 6.16222 7.42963 6.79593 6.79592C7.42963 6.16222 8.23702 5.73066 9.116 5.55582C9.99498 5.38098 10.9061 5.47071 11.734 5.81367C12.562 6.15663 13.2697 6.73741 13.7676 7.48257C14.2655 8.22773 14.5313 9.1038 14.5313 10C14.5298 11.2013 14.0519 12.353 13.2025 13.2025C12.353 14.0519 11.2013 14.5298 10 14.5312Z" fill="none" />
                  </svg>
                  Record new sample
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
