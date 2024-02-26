import { useState } from "react";
import {
  Popselect,
  Checkbox,
  MultiSelect,
  MultiSelectOption,
} from "components";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import interfaceSliderImg from "../../../wisdom/assets/interfaceSlider.svg";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
const SORT_OPTIONS = [
  { id: 1, value: "Name" },
  { id: 2, value: "Date" },
  { id: 3, value: "Type" },
  { id: 4, value: "Status" },
];

export function Infotable() {
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState<MultiSelectOption>(
    SORT_OPTIONS[0]
  );

  const onItemTableEdit = () => {
    // setIsEditModalOpen(true);
  };

  const onItemTableRemove = () => {
    // setIsDeleteModalOpen(true);
  };

  return (
    <div className="pb-0 mt-[100px]">
      <div className="max-w-[55%]">
        <div className="sm:flex sm:items-center">
          <div className="relative flex border h-9 w-[300px] p-2 rounded-md mr-4 items-center">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search by name or tags"
              type="search"
              name="search"
            />
            <img
              className="pointer-events-none absolute right-2"
              width={24}
              height={24}
              src={interfaceSliderImg}
              alt="interface slider"
            />
          </div>
          <MultiSelect
            placeholder="Sort by"
            value={sortOption}
            options={SORT_OPTIONS}
            onChange={setSortOption}
          />
          <div className="flex items-center ml-auto"></div>
        </div>
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="flex items-end py-3.5 pl-1 max-w-[30px]">
                      <Checkbox />
                    </th>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Collection Name
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Tags
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="bg-white">
                    <td className="text-left pr-4 pl-1  max-w-[30px]">
                      <Checkbox />
                    </td>
                    <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                      Interviews
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      <button
                        type="button"
                        className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] "
                      >
                        Career
                      </button>
                      <button
                        type="button"
                        className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-4 py-1 text-center text-[14px] mr-[15px] "
                      >
                        Career
                      </button>
                    </td>

                    <td>
                      <Popselect
                        button={
                          <div className="relative whitespace-nowrap py-3 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <a className="text-purple-600 hover:text-purple-900">
                              <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
                            </a>
                          </div>
                        }
                        options={[
                          {
                            icon: (
                              <EyeIcon className="text-[#321841] w-5 h-5 mt-[3px]" />
                            ),
                            text: "View Collection",
                            onClick: onItemTableEdit,
                          },
                          {
                            icon: <img src={EditIcon} className="w-5 h-5" />,
                            text: "Edit Collection",
                            onClick: onItemTableRemove,
                          },
                        ]}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0 mt-4 gap-6 pb-5">
          <div className="-mt-px flex">
            <a className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer">
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer border-purple-500 text-purple-600">
              1
            </a>
          </div>
          <div className="-mt-px flex">
            <a className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer">
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
