import { EllipsisVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, CreateCollectionPage, LabeledInput, Modal, MultiSelect, MultiSelectOption, Popselect, ShadowBox } from "components";
import { useProfile } from "modules/auth";
import { useCollections } from "modules/expert";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import deleteContentImg from 'assets/svg/deleteContent.svg';
import editContentImg from 'assets/svg/editContent.svg';
import { EditCollectionPage } from "./EditCollectionPage";
import interfaceSliderImg from './assets/interfaceSlider.svg';
import FilterPopover from "./UI/FilterPopover";
import WisdomTable, { TDataContentItem } from "./UI/WisdomTable";
import { IPopselectOption } from "components/ui/Popselect";

const SORT_OPTIONS = [{ id: 1, value: "Name" }, { id: 2, value: "Date" }, { id: 3, value: "Type" }, { id: 4, value: "Status" }];




export function CollectionsPage() {

    const collections = useCollections();
    const profile = useProfile();

    const filteredCollections = useMemo(() => {
        return (collections.data ?? [])
            .filter((collection) => collection.name !== profile.data?.username)
    }, [collections.data, profile.data])

    const popselectOptionsTable: IPopselectOption[] = []
    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => setCurrentPage(currentPage - 1);
    const goToNextPage = () => setCurrentPage(currentPage + 1);
    const goToPage = (page: number) => setCurrentPage(page)


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [sortOption, setSortOption] = useState<MultiSelectOption>(SORT_OPTIONS[0]);
    const [openFilter, setOpenFilter] = useState(false)


    const [selectedCollections, setSelectedCollections] = useState<{[id: string]: TDataContentItem}>({});
    const onSelectCollection = (e: ChangeEvent<HTMLInputElement>, file: TDataContentItem) => {
        if (e.target.checked){
            setSelectedCollections(prev => ({
                ...prev,
                [file.id]: file
            }))
        }else {
            const selecetedFilesCopy = {...selectedCollections};
            delete selecetedFilesCopy[file.id]
            setSelectedCollections(selecetedFilesCopy)
        }
    };
    const onSelectAllCollections = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            const selectedCollectionsResult: {[id: string]: TDataContentItem} = {};
            filteredCollections?.forEach((file) => {
                selectedCollectionsResult[file.id] = file;
            })            
            setSelectedCollections(selectedCollectionsResult)
        }else {
            setSelectedCollections({})
        }
    }
    const columns = [
        {
            title: 'Name',
            key: 'name',
        },
        {
            title: 'Tags',
            key: 'tags',
            render: (tags: TDataContentItem) => (
                <div className="flex flex-wrap items-center w-full text-gray-900 sm:text-sm sm:leading-6">
                    {
                        tags.map((tag: string) => (
                            <div className="box-border h-7 px-3 pr-3 bg-purple-100 rounded-xl flex items-center text-[14px] max-h-[24px] mr-3" key={tag}>
                                {tag}
                            </div>
                        ))
                    }
            </div>
            )
        },
        {
            key: null,
            title: 'Edit',
            render: (collection: TDataContentItem) => <EditCollection collection={collection}/>
        }
    ]

    return (
        <div>
            <WisdomTable 
                header={
                    <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center space-x-4">
                        <FilterPopover
                            open={openFilter}
                            modalContent={
                                <div>
                                    <div className={"flex h-9 w-[300px] p-2 mr-4 items-center bg-white rounded-lg "}>
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
                                            <LabeledInput label={'Collection Name'}/>
                                            <LabeledInput label={'Tags'}/>
                                        </div>
                                        <Button onClick={() => setOpenFilter(false)} fullWidth={false} className={"self-end text-purple-700"} variant={'text'}>Search</Button>
                                    </div>
                                </div>
                            }
                        >
                            <div className="relative flex border h-9 w-[300px] p-2 rounded-md mr-4 items-center bg-white">
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
                        <MultiSelect placeholder="Sort by" value={sortOption} options={SORT_OPTIONS} onChange={setSortOption} />
                    </div>
                    <div className="flex items-center space-x-4 ml-auto">
                        <Button onClick={() => setIsModalOpen(true)} variant="text" className="space-x-3">
                            <PlusIcon className="h-5" />
                            <div>Add new collection</div>
                        </Button>
                    </div>
                </div>
                }
                onSelectAllItems={onSelectAllCollections}
                onSelectItem={onSelectCollection}
                selectedItems={selectedCollections}
                dataContent={filteredCollections ?? []}
                columns={columns}
                popselectOptionsTable={popselectOptionsTable}
                goToNextPage={goToNextPage}
                goToPage={goToPage}
                goToPreviousPage={goToPreviousPage}
                currentPage={currentPage}
            />
            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}>
                    <CreateCollectionPage onSubmitSuccess={() => collections.refetch()} onBackButtonClick={() => setIsModalOpen(false)}/>
            </Modal>
        </div>
    )
}
function EditCollection (props: {collection: TDataContentItem}) {
    const {collection} = props;
    const onItemTableEdit = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsEditModalOpen(true)
    }
    const onItemTableRemove = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsDeleteModalOpen(true)
    }
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const onDeleteCollection = (collection: TDataContentItem) => {
        console.log('delete collection', collection);
    }
    const onCloseModalEdit = () => {
        setIsEditModalOpen(false)
    } 
    const onCloseModalDelete = () => {
        setIsDeleteModalOpen(false)
    } 
    return (<>
        <Popselect
            button={
                <td className="relative whitespace-nowrap py-3 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a className="text-purple-600 hover:text-purple-900">
                        <EllipsisVerticalIcon className="h-4 w-4 text-gray-500" />
                    </a>
                </td>
            }
            options={[
                {icon: <img src={editContentImg} className={"w-5 h-5"}/>, text: 'Edit collection', onClick: onItemTableEdit},
                {icon: <img src={deleteContentImg} className={"w-5 h-5"}/>, text: 'Delete collection', onClick: onItemTableRemove},
            ]}
        />
        <Modal isOpen={isDeleteModalOpen} closeModal={onCloseModalDelete}>
            <ShadowBox className={"px-16"}>
                <p className={"text-center text-lg mb-6"}>Are you sure you want to delete the collection {collection.name}? All the files will be moved to "Default Collection"</p>
                <div className={"flex gap-4"}>
                    <Button onClick={() => setIsDeleteModalOpen(false)} variant={'outlined'}>No</Button>
                    <Button onClick={() => onDeleteCollection(collection)} variant={'primary'}>Yes</Button>
                </div>
            </ShadowBox>
        </Modal>
        <Modal isOverflowHidden={false} isOpen={isEditModalOpen} closeModal={onCloseModalEdit}>
            <EditCollectionPage/>
        </Modal>
    </>)
}