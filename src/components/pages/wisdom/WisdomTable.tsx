import DocIcon from 'assets/png/doc.png';
import TxtIcon from 'assets/png/txt.png';
import PdfIcon from 'assets/png/pdf.png';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/16/solid';
import { ArrowLongLeftIcon, ArrowLongRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import { MultiSelect, ShadowBox } from 'components';
import { useState } from 'react';

const people = [
    {
        name: 'File.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 2.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 2.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 2.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 2.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 2.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 3.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
    {
        name: 'File 3.doc',
        type: 'application/msword',
        id: 'lindsay.walton@example.com',
        role: 'Member',
        dateAdded: new Date(),
    },
]

const FileTypeToIconMap: { [key: string]: string } = {
    "text/plain": TxtIcon,
    "application/msword": DocIcon,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": DocIcon,
    "application/pdf": PdfIcon,

}


const PAGINATION_LIMIT = 10;

const numberOfPages = Math.ceil(people.length / PAGINATION_LIMIT);

const pages = [...Array(numberOfPages).keys()].map(key => key + 1);


export function WisdomTable() {

    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => setCurrentPage(currentPage - 1);
    const goToNextPage = () => setCurrentPage(currentPage + 1);

    return (
        <ShadowBox>
            <div>
                <div className="sm:flex sm:items-center">

                    <div className="relative flex border h-9 w-[300px] p-2 rounded-md mr-4">
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
                    </div>
                    <MultiSelect placeholder="Sort by" value={[]} options={[{ id: 1, value: "Name" }, { id: 2, value: "Date" }, { id: 3, value: "Type" }, { id: 4, value: "Status" }]} onChange={() => { }} />
                    <div className="flex items-center space-x-3 ml-auto">
                        <PlusIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    <EllipsisVerticalIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                    </div>
                </div>
                <div className="mt-2 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0"><span className="sr-only">Edit</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.slice((currentPage - 1) * PAGINATION_LIMIT, (currentPage - 1) * PAGINATION_LIMIT + PAGINATION_LIMIT).map((file, index) => (

                                        <tr className={classNames({ "bg-purple-100": index % 2 !== 0 })} key={file.id + index}>

                                            <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                                                <div className="flex items-center">
                                                    <img className="h-6 w-6 mr-2" src={FileTypeToIconMap[file.type]} alt={file.type} />
                                                    <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.name}</span>
                                                </div>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                                <div className="text-gray-900">{file.dateAdded.toDateString()}</div>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                                File
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    Active
                                                </span>
                                            </td>

                                            <td className="relative whitespace-nowrap py-3 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <a  className="text-purple-600 hover:text-purple-900">
                                                    <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
                                                </a>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4">
                    <div className="-mt-px flex w-0 flex-1">
                        <a
                            onClick={currentPage > 1 ? goToPreviousPage : undefined}
                            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                        >
                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Previous
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        {
                            (numberOfPages > 6 ? pages.slice(0, 3) : pages).map((page) => {
                                return (
                                    <a
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={classNames(
                                            "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer",
                                            { "border-purple-500 text-purple-600": currentPage === page },
                                            { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": currentPage !== page },
                                        )}
                                    >
                                        {page}
                                    </a>
                                )
                            })
                        }
                        {
                            numberOfPages > 6 && (
                                <span className={classNames(
                                    "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium",
                                    { "border-purple-500 text-purple-600": Boolean(currentPage > 3 && currentPage < numberOfPages - 2)},
                                    { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": !Boolean(currentPage > 3 && currentPage < numberOfPages - 2) },
                                )}>
                            ...
                        </span>
                            )
                        }
                        {
                            numberOfPages > 6 && pages.slice(numberOfPages - 3, numberOfPages).map((page) => (
                                <a
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={classNames(
                                    "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium cursor-pointer",
                                    { "border-purple-500 text-purple-600": currentPage === page },
                                    { "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": currentPage !== page },
                                )}
                            >
                                {page}
                            </a>
                            ))
                        }
                        
                        
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <a
                            onClick={currentPage < numberOfPages ? goToNextPage : undefined}
                            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                        >
                            Next
                            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </a>
                    </div>
                </nav>
            </div>

        </ShadowBox>
    )
}

