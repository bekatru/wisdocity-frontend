import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/16/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ShadowBox, Popselect, Modal, Button, LabeledInput } from 'components';
import { ChangeEvent, useState } from 'react';
import { Collection, Media } from 'modules/expert';
import interfaceSliderImg from './assets/interfaceSlider.svg';
import deleteContentImg from 'assets/svg/deleteContent.svg';
import editContentImg from 'assets/svg/editContent.svg';
import downloadContentImg from 'assets/svg/download.svg';
import starIcon from 'assets/svg/starIcon.svg';
import stackItemIcon from 'assets/svg/stackItemsIcon.svg';
import viewEyeIcon from 'assets/svg/viewEyeIcon.svg';
import { getIconByMime } from 'components/helpers/getIconByMime';
import { TOpenModalTypeSelectedFiles, WisdomFilesSelectedFilesPopselect } from './WisdomFilesSelectedFilesPopselect';
import FilterPopover from './UI/FilterPopover';
import WisdomTable, { TDataContentItem } from './UI/WisdomTable';



interface FilesTableProps {
    files: Media[];
    collections: Collection[];
    onAddFileClick: () => void;
    isShowCollection?: boolean,
}

export function WisdomFiles(props: FilesTableProps) {
    const {isShowCollection=true} = props;

    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => setCurrentPage(currentPage - 1);
    const goToNextPage = () => setCurrentPage(currentPage + 1);

    const onItemTableEdit = () => {
        setIsEditModalOpen(true)
    }
    const onItemTableRemove = () => {
        setIsDeleteModalOpen(true)
    }

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const onDeleteFile = (file: TDataContentItem) => {
        console.log('delete file', file);
    }

    const [selectedFiles, setSelectedFiles] = useState<{[id: string]: TDataContentItem}>({});
    const onSelectFile = (e: ChangeEvent<HTMLInputElement>, file: TDataContentItem) => {
        if (e.target.checked){
            setSelectedFiles(prev => ({
                ...prev,
                [file.id]: file
            }))
        }else {
            const selecetedFilesCopy = {...selectedFiles};
            delete selecetedFilesCopy[file.id]
            setSelectedFiles(selecetedFilesCopy)
        }
    };
    const onSelectAllFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            const selectedFilesResult: {[id: string]: Media} = {};
            props.files.forEach((file) => {
                selectedFilesResult[file.id] = file;
            })            
            setSelectedFiles(selectedFilesResult)
        }else {
            setSelectedFiles({})
        }
    }
    const [openSelectedFilesType, setOpenSelectedFilesType] = useState<TOpenModalTypeSelectedFiles>(null);

    const onCloseSelectedFiles = () => {
        setOpenSelectedFilesType(null)
    }

    const onDeleteSelectedFiles = () => {
        console.log('delete');
        
    }
    const onItemTableDownload = () => {
        console.log('download content')
    }
    const [openFilter, setOpenFilter] = useState(false);

    const columns = [
        {
            title: 'Name',
            key: null,
            render: (file: TDataContentItem) => (
                <div className="flex items-center">
                    <img className="h-6 w-6 mr-2" src={getIconByMime(file.contentType)} alt={file.contentType} />
                    <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.fileName}</span>
                </div>
            )
        },
        {
            title: 'Date',
            key: 'fileName',
        },
        {
            title: 'Type',
            key: 'contentType',
            render: () => 'File'
        },
        {
            title: 'Status',
            key: 'updatedAt',
            render: () => (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Active
                </span>
            )
        },
        
        (isShowCollection
            ?{
            key: null,
            title: 'Collection',
            render: (file: TDataContentItem) => (
                props.collections.find((collection) => file.key.includes(collection.id))?.name
            )
        }: undefined),
        {
            key: null,
            title: 'Edit',
            render: (file: TDataContentItem) => (
                <>
                    <Popselect
                        button={
                            <td className="relative whitespace-nowrap py-3 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <a className="text-purple-600 hover:text-purple-900">
                                    <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
                                </a>
                            </td>
                        }
                        options={[
                            {icon: <img src={editContentImg} className={"w-5 h-5"}/>, text: 'Edit content', onClick: onItemTableEdit},
                            {icon: <img src={downloadContentImg} className={"w-5 h-5"}/>, text: 'Download', onClick: onItemTableDownload},
                            {icon: <img src={deleteContentImg} className={"w-5 h-5"}/>, text: 'Delete content', onClick: onItemTableRemove},
                        ]}
                    />
                    <Modal isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)}>
                        <ShadowBox>
                            edit
                        </ShadowBox>
                    </Modal>
                    <Modal isOpen={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)}>
                        <ShadowBox className={"px-16"}>
                            <p className={"text-center text-lg mb-6"}>Are you sure you want to delete the content {file.fileName}?</p>
                            <div className={"flex gap-4"}>
                                <Button onClick={() => setIsDeleteModalOpen(false)} variant={'outlined'}>No</Button>
                                <Button onClick={() => onDeleteFile(file)} variant={'primary'}>Yes</Button>
                            </div>
                        </ShadowBox>
                    </Modal>
                </>
            )
        }
        
    ]
    return (
        <div>
            <WisdomTable
                selectedItems={selectedFiles}
                onSelectAllItems={onSelectAllFiles}
                onSelectItem={onSelectFile}
                header={
                    <div className="sm:flex sm:items-center">
                        <FilterPopover 
                            open={openFilter}
                            modalContent={
                                <div>
                                    <div className={"flex h-9 w-[300px] p-2 mr-4 items-center"}>
                                        <MagnifyingGlassIcon
                                            className="pointer-events-none absolute left-2 h-full w-5 text-gray-400"
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
                                    <div className={"px-8 py-6 flex flex-col gap-4"}>
                                        <div className={"space-y-3"}>
                                            <LabeledInput label={'Name'}/>
                                            <LabeledInput label={'File Name'}/>
                                            <LabeledInput label={'Date within'}/>
                                            <LabeledInput label={'Type'}/>
                                            <LabeledInput label={'Collection'}/>
                                        </div>
                                        <Button onClick={() => setOpenFilter(false)} fullWidth={false} className={"self-end text-purple-700"} variant={'text'}>Search</Button>
                                    </div>
                                </div>
                            }
                        >
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
                                onClick={() => {
                                    setOpenFilter(true)
                                }}
                                width={24} height={24} src={interfaceSliderImg} alt={'interface slider'}/>
                            </div>
                        </FilterPopover>
                        <div className="flex items-center space-x-3 ml-auto">
                            <PlusIcon onClick={props.onAddFileClick} className="h-5 w-5 text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                }
                currentPage={currentPage}
                popselectOptionsTable={[
                    {icon: <img src={viewEyeIcon} className={"w-5 h-5"}/>, text: 'View ', onClick: () => setOpenSelectedFilesType('view')},
                    {icon: <img src={starIcon} className={"w-5 h-5"}/>, text: 'Move to Collection', onClick: () => setOpenSelectedFilesType('collection')},
                    {icon: <img src={stackItemIcon} className={"w-5 h-5"}/>, text: 'Archive', onClick: () => setOpenSelectedFilesType('archive')},
                    {icon: <img src={deleteContentImg} className={"w-5 h-5"}/>, text: 'Delete', onClick: () => setOpenSelectedFilesType('delete')},
                ]}
                goToNextPage={goToNextPage}
                goToPage={(page) => setCurrentPage(page)}
                goToPreviousPage={goToPreviousPage}
                dataContent={props.files}
                columns={columns}
            />
            <WisdomFilesSelectedFilesPopselect 
                onDeleteSelectedFiles={onDeleteSelectedFiles}
                openModalType={openSelectedFilesType} 
                closeModal={onCloseSelectedFiles}
            />
            
        </div>
    )
}
