import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { classNames, Button, CenteredContainer, Header, Input, Label, Paragraph, ShadowBox, MultiSelect, MultiSelectOption } from "components";
import DocIcon from 'assets/png/doc.png';
import TxtIcon from 'assets/png/txt.png';
import PdfIcon from 'assets/png/pdf.png';
import UrlIcon from 'assets/png/url.png';
import Record from 'assets/png/record.png';
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useParams } from "react-router-dom";
import { useCollections, useUploadFiles } from "modules/expert";
import { useProfile } from "modules/auth";
import UploadWisdomRecordAudio from "./UploadWisdomRecordAudio";
import axios from "axios";
// import { Routes } from "modules/routing";

const FILE_TYPES = ['pdf', 'doc', 'docx', 'txt'];
const FILE_MAX_SIZE_IN_MB = 10;

const FileTypeToIconMap: { [key: string]: string } = {
    "text/plain": TxtIcon,
    "application/msword": DocIcon,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": DocIcon,
    "application/pdf": PdfIcon,
    "audio/webm;codecs=opus": Record,
}

interface UploadWisdomPageProps {
    onBackButtonClick: () => void;
    onSubmitSuccess: () => void;
}

export function UploadWisdomPage(props: UploadWisdomPageProps) {

    const { collectionId } = useParams()
    const collections = useCollections();
    const profile = useProfile();

    const filteredCollections = useMemo(() => {
        return (collections.data ?? [])
            .filter((collection) => collection.name !== profile.data?.username)
            .map((collection) => ({
                id: collection.id,
                value: collection.name,
            }))
    }, [collections.data, profile.data])

    const [files, setFiles] = useState<File[]>([]);
    const [audioFiles, setAudioFiles] = useState<File[]>([]);
    const [link, setLink] = useState<string>("");
    const [links, setLinks] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const [selectedCollection, setSelectedCollection] = useState<MultiSelectOption>(filteredCollections.find((collection) => collection.id === collectionId) ?? filteredCollections[0]);

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
        try {

            const formData = new FormData();
            formData.append("language", "en");
            formData.append('file', file)

            const response = await axios.post('https://api.jillwhite.anyagent.ai/notes', formData, {
                headers: {
                    "Authorization": "gf1DMx25ADNpUoFBWcZxjYXu5x9uQxIXaRGcz4p-pnM"
                }
            });

            const blob = new Blob([response.data.transcript, response.data.notes], { type: 'text/plain' });
            const textFile = new File([blob], file.name + '.txt', { type: 'text/plain' });

            setAudioFiles([...audioFiles, file]);
            setFiles([...files, textFile]);
        } catch {
            toast.error("Failed processing audio file");
        }
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

    const handleDeleteLink = useCallback((linkIndex: number) => {
        const linksCopy = [...links];
        linksCopy.splice(linkIndex, 1);
        setLinks(linksCopy);
    }, [links, setLinks])

    const handleAddLink = useCallback(() => {
        if (links.includes(link)) {
            toast.warn("Link already added");
            return setLink("");
        }

        setLinks([...links, link]);
        setLink("");
    }, [link, links, setLink, setLinks])

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
                                onChange={setSelectedCollection} />
                        </div>

                        <div className="space-y-2">
                            <Label>Links</Label>
                            <div className="grid grid-cols-3 grid-flow-row gap-2">
                                {
                                    files && Object.values(links).map((link, index) => (
                                        <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={link}>
                                            <img className="h-6 w-6 mr-2" src={UrlIcon} alt={'url'} />
                                            <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{link}</span>
                                            <XMarkIcon onClick={() => handleDeleteLink(index)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
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
                                <Button
                                    disabled={!link}
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
                                // types={FILE_TYPES}
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
                                        <img className="h-6 w-6 mr-2" src={FileTypeToIconMap[file.type]} alt={file.type} />
                                        <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.name}</span>
                                        <XMarkIcon onClick={() => handleDeleteFile(index)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
                                    </div>
                                ))
                            }
                            {
                                audioFiles.map((file, index) => (
                                    <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={file.name + index}>
                                        <img className="h-6 w-6 mr-2" src={FileTypeToIconMap[file.type]} alt={file.type} />
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
                    <div className="flex space-x-2 mt-8">
                        <Button variant="outlined" onClick={props.onBackButtonClick}>Back</Button>
                        <Button onClick={handleSave} isPending={isPending}>Save</Button>
                    </div>
                </ShadowBox>
            </div>
        </CenteredContainer>
    )
}