import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { classNames, Button, CenteredContainer, Header, Input, Label, Paragraph, ShadowBox, MultiSelect, MultiSelectOption, Modal, CreateCollectionPage } from "components";
import DocIcon from 'assets/png/doc.png';
import TxtIcon from 'assets/png/txt.png';
import PdfIcon from 'assets/png/pdf.png';
import UrlIcon from 'assets/png/url.png';
import Record from 'assets/png/record.png';
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useParams } from "react-router-dom";
import { CreateCollectionResponse, useCollections, useUploadFiles } from "modules/expert";
import { useProfile } from "modules/auth";
import UploadWisdomRecordAudio from "./UploadWisdomRecordAudio";

const FILE_TYPES = ['pdf', 'doc', 'docx', 'txt', 'mp3', 'wav', 'flac', 'mp4'];
const FILE_MAX_SIZE_IN_MB = 10;

function getFileIcon(type: string) {
    switch (type) {
        case "text/plain": return TxtIcon;
        case "application/msword": return DocIcon;
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": return DocIcon;
        case "application/pdf": return PdfIcon;
        default: return Record;
    }
}
interface ILinks {
    [link: string]: {
        value: string,
        type?: string | number | undefined
    }
}

interface UploadWisdomPageProps {
    onBackButtonClick: () => void;
    onSubmitSuccess: () => void;
}

const SELECT_OPTION_ADD_NEW_COLLECTION = { id: 'add-new-collection', name: 'Add New Collection', tags: [], root: false };
const SELCT_OPTIONS_LINK_TYPE = [
    {id: 'text', value: 'Text'},
    {id: 'audio', value: 'Audio'},
    {id: 'video', value: 'Video'},
]

export function UploadWisdomPage(props: UploadWisdomPageProps) {

    const { collectionId } = useParams()
    const collections = useCollections();
    const profile = useProfile();

    const filteredCollections = useMemo(() => {        
        return (collections.data?.concat([SELECT_OPTION_ADD_NEW_COLLECTION]) ?? [])
            .filter((collection) => collection.name !== profile.data?.username)
            .map((collection) => ({
                id: collection.id,
                value: collection.name,
            }))
    }, [collections.data, profile.data]);

    const [files, setFiles] = useState<File[]>([]);
    const [audioFiles, setAudioFiles] = useState<File[]>([]);
    const [link, setLink] = useState<string>("");
    const [links, setLinks] = useState<ILinks>({});
    const [isDragging, setIsDragging] = useState(false);

    const [isModalOpenAddNewCollection, setIsModalOpenAddNewCollection] = useState(false);

    const [selectedLinkType, setSelectedLinkType] = useState<MultiSelectOption | null>(null)
    const [selectedCollection, setSelectedCollection] = useState<MultiSelectOption>(filteredCollections.find((collection) => collection.id === collectionId) ?? filteredCollections[0]);

    const onSelectCollection = (option: MultiSelectOption) => {
        if (option.value === SELECT_OPTION_ADD_NEW_COLLECTION.name) {
            setIsModalOpenAddNewCollection(true)
        }else {
            setSelectedCollection(option)
        }
    }

    const onSubmitSuccessAddNewCollection = (responseData?: CreateCollectionResponse) => {
        if (responseData){
            setSelectedCollection({id: responseData.id, value: responseData.name})
        }
        collections.refetch()
    }

    const { mutate: uploadFiles, isPending } = useUploadFiles({
        onSuccess: async () => {
            toast.success("File uploaded successfully!");
            await props.onSubmitSuccess()
            props.onBackButtonClick && props.onBackButtonClick();
        },
        onError: (error) => {
            toast.error(error.response?.data.message);
        }
    })

    const handleAddAudioFile = async (file: File) => {
        setFiles([...files, file]);
    }

    const handleDeleteAudioFile = useCallback((fileIndex: number) => {
        const filesCopy = [...audioFiles];
        filesCopy.splice(fileIndex, 1);
        setAudioFiles(filesCopy);
    }, [files, setFiles])

    const handleAddFiles = useCallback((newFiles: FileList) => {
        setFiles([...files, ...Array.from(newFiles)]);
    }, [files, setFiles])

    const handleDeleteFile = useCallback((fileIndex: number) => {
        const filesCopy = [...files];
        filesCopy.splice(fileIndex, 1);
        setFiles(filesCopy);
    }, [files, setFiles])

    const handleDeleteLink = useCallback((linkId: string) => {
        const linksCopy = {...links};
        delete linksCopy[linkId];
        setLinks(linksCopy);
    }, [links, setLinks])

    const handleAddLink = useCallback(() => {
        if (links[link]) {
            toast.warn("Link already added");
            setSelectedLinkType(null)
            return setLink("");
        }
        setLinks(prev => ({
            ...prev,
            [link]: {
                value: link,
                type: selectedLinkType?.id,
            }
        }));
        setSelectedLinkType(null)
        setLink("");
    }, [link, links, setLink, setLinks, selectedLinkType])

    const handleSave = useCallback(() => {
        let collectionToUploadTo;
        if (!collectionId) {
            const defaultCollectionId = collections.data?.find((collection) => collection.name === 'Default Collection');
            collectionToUploadTo = defaultCollectionId?.id
        } else {
            collectionToUploadTo = selectedCollection.id as string;
        }

        if (!collectionToUploadTo || !files?.length) {
            return;
        }

        uploadFiles({ collectionId: collectionToUploadTo, files })
    }, [collectionId, uploadFiles, collections, selectedCollection, files])


    return (
        <CenteredContainer>
            <div className="w-[500px]">
                <ShadowBox>
                    <Header>Upload new information</Header>
                    <div className="space-y-4 mt-6">
                        <div className="space-y-2">
                            <Label>To collection:</Label>
                            <MultiSelect
                                options={filteredCollections}
                                value={selectedCollection}
                                onChange={onSelectCollection} />

                            <Modal
                                isOpen={isModalOpenAddNewCollection}
                                closeModal={() => setIsModalOpenAddNewCollection(false)}>
                                    <CreateCollectionPage onSubmitSuccess={onSubmitSuccessAddNewCollection} onBackButtonClick={() => setIsModalOpenAddNewCollection(false)}/>
                            </Modal>
                        </div>

                        <div className="space-y-2">
                            <Label>Links</Label>
                            <div className="grid grid-cols-3 grid-flow-row gap-2">
                                {
                                    files && Object.values(links).map((link) => (
                                        <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={link.value}>
                                            <img className="h-6 w-6 mr-2" src={UrlIcon} alt={'url'} />
                                            <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{link.value}</span>
                                            <XMarkIcon onClick={() => handleDeleteLink(link.value)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
                                        </div>
                                    ))
                                }
                            </div>
                            <Paragraph>Add new links</Paragraph>
                            <form className="flex space-x-2" onSubmit={(e) => { e.preventDefault(); handleAddLink() }}>
                                <Input
                                    type='url'
                                    value={link}
                                    onChange={(e) => setLink(e.target.value.trim())}
                                    placeholder="Add new link"
                                />
                                <MultiSelect
                                    options={SELCT_OPTIONS_LINK_TYPE}
                                    value={selectedLinkType}
                                    placeholder={'Type'}
                                    onChange={setSelectedLinkType}
                                />

                                <Button
                                    disabled={!link || !selectedLinkType}
                                    type="submit"
                                    fullWidth={false}
                                    variant="outlined"
                                >
                                    Add
                                </Button>
                            </form>
                        </div>
                        <div className="space-y-2">
                            <Label>Files</Label>
                            <Paragraph>Supported file type: {FILE_TYPES.join(', ').toUpperCase()}</Paragraph>
                            <FileUploader
                                multiple
                                types={FILE_TYPES}
                                maxSize={FILE_MAX_SIZE_IN_MB}
                                onTypeError={toast.error}
                                onSizeError={toast.error}
                                handleChange={handleAddFiles}
                                onDraggingStateChange={setIsDragging}
                                dropMessageStyle={{ borderRadius: 16, background: '#e9d5ff', borderWidth: 1.5 }}
                            >
                                <div
                                    className={classNames(
                                        "border-[1.5px] border-dashed border-gray-400 rounded-2xl p-6 flex flex-col items-center space-y-1 mt-2",
                                        isDragging && "opacity-0"
                                    )}
                                >
                                    <Paragraph>
                                        Drag and drop file here, or{' '}
                                        <span className="text-blue-500 cursor-pointer font-semibold hover:underline">Browse</span>
                                    </Paragraph>
                                    <Paragraph className="text-[12px]">
                                        Maximum file size {FILE_MAX_SIZE_IN_MB}MB
                                    </Paragraph>

                                    <div className="border-[1.5px] border-dashed border-gray-400 rounded-md p-2 flex flex-col items-center mt-2">
                                        <ArrowDownTrayIcon className="h-6 w-6 text-gray-500" />
                                    </div>

                                </div>
                            </FileUploader>
                        </div>
                        <div className="grid grid-cols-3 grid-flow-row gap-2">
                            {
                                files.map((file, index) => (
                                    <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={file.name + index}>
                                        <img className="h-6 w-6 mr-2" src={getFileIcon(file.type)} alt={file.type} />
                                        <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.name}</span>
                                        <XMarkIcon onClick={() => handleDeleteFile(index)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
                                    </div>
                                ))
                            }
                            {
                                audioFiles.map((file, index) => (
                                    <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={file.name + index}>
                                        <img className="h-6 w-6 mr-2" src={getFileIcon(file.type)} alt={file.type} />
                                        <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.name}</span>
                                        <XMarkIcon onClick={() => handleDeleteAudioFile(index)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="space-y-2">
                            <Label>Recordings</Label>
                            <UploadWisdomRecordAudio onNextClick={handleAddAudioFile} />
                        </div>
                        <div className="grid grid-cols-3 grid-flow-row gap-2">

                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outlined" onClick={props.onBackButtonClick}>Back</Button>
                        <Button onClick={handleSave} isPending={isPending}>Save</Button>
                    </div>
                </ShadowBox>
            </div>
        </CenteredContainer>
    )
}