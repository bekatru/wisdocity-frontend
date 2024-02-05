import React, { useState } from 'react';

export function Settings() {

    return (
        <>
            <div className="flex">
                
                <div className="w-full md:w-1/2">
                    <div className='flex-row-reverse'>
                <button type="button" className="text-[#6B6985] bg-none fn fw-b rounded-full px-6 py-2 text-center text-[16px] border border-[#6B6985] mb-4 flex float-right">Save changes</button>
</div>
                   
                    <div className="flex w-full card shadow-p bg-white px-6 py-6  mb-[34px]">

                        <div className="box-body w-full">
                            <div className="flex align-center w-full">
                                <div className="w-full">
                                    <div className="flex items-start text-[20px] fn fw-b text-[#321841] mb-[24px]">Change password</div>

                                    <form>
                                        <div className="mb-[24px]">
                                            <label className='flex text-[14px] fn fw-r text-[#321841] mb-[6px]'>Current password</label>
                                            <input type="password" id="search" className="h-12 w-full border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" required />
                                        </div>
                                        <div className="mb-[24px]">
                                            <label>New password</label>
                                            <input type="password" id="search" className="h-12 w-full border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create new password" required />
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
