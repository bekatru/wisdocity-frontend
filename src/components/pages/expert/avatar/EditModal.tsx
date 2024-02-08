import { useCallback, useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { classNames, Input, Label, Paragraph } from "components";
import { Switch } from '@headlessui/react';
import DocIcon from 'assets/png/doc.png';
import TxtIcon from 'assets/png/txt.png';
import PdfIcon from 'assets/png/pdf.png';
import EditIcon from "../../../../assets/profile/icon-edit.svg";

const FILE_TYPES = ['pdf', 'doc', 'docx', 'txt'];
const FILE_MAX_SIZE_IN_MB = 10;

const FileTypeToIconMap: { [key: string]: string } = {
    "text/plain": TxtIcon,
    "application/msword": DocIcon,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": DocIcon,
    "application/pdf": PdfIcon,
}

export function EditModal() {
    const [tags, setTags] = useState<string[]>([]);
    const [collection, setCollection] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [enabled1, setEnabled1] = useState(false);
    const [enabled2, setEnabled2] = useState(false);
    const [enabled3, setEnabled3] = useState(false);

    const handleAddFiles = useCallback((newFiles: FileList) => {
        setFiles(prevFiles => [...prevFiles, ...Array.from(newFiles)]);
    }, [setFiles]);

    const handleDeleteFile = useCallback((fileIndex: number) => {
        setFiles(prevFiles => {
            const filesCopy = [...prevFiles];
            filesCopy.splice(fileIndex, 1);
            return filesCopy;
        });
    }, [setFiles]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="ms-auto">
                <button className="text-black" onClick={openModal}>
                    <img src={EditIcon} alt="Edit" />
                </button>
            </div>
            {isOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="max-w-md w-full mx-auto z-50 card shadow-p bg-white px-6 py-6 mb-[34px]">
                        <div>
                            <div className="flex w-full">
                                <div className="box-body w-full">
                                    <div className="flex align-center w-full">
                                        <div className="w-full">
                                            <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">Edit Avatar</div>
                                            <form>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Displayed Name</Label>
                                                    <Input type="text" className="h-10 w-full border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Interviews" />
                                                </div>
                                                <div className="mb-[24px]">
                                                    <div className="space-y-2 flex flex-wrap items-center">
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
                                                            <div className={classNames("border-[1.5px] border-dashed border-[#fff] rounded-2xl p-0 items-center mt-0 flex", isDragging && "opacity-0")}>
                                                                <div className="border-[1.5px] border-dashed border-[#006BC5] rounded-md p-2 items-center mt-2">
                                                                    <ArrowUpTrayIcon className="h-6 w-6 text-[#006BC5]" />
                                                                </div>
                                                            </div>
                                                        </FileUploader>
                                                        <Paragraph className="grow text-[#321841] fn fw-r pl-[15px]">
                                                            Upload avatar
                                                        </Paragraph>
                                                    </div>
                                                    <div className="grid grid-cols-3 grid-flow-row gap-2">
                                                        {files && files.map((file, index) => (
                                                            <div className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded" key={file.name + index}>
                                                                <img className="h-6 w-6 mr-2" src={FileTypeToIconMap[file.type]} alt={file.type} />
                                                                <span className="text-nowrap overflow-hidden text-ellipsis text-sm">{file.name}</span>
                                                                <XMarkIcon onClick={() => handleDeleteFile(index)} className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Add tags</Label>
                                                    <TagCreator value={tags} onChange={setTags} />
                                                </div>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Choose wisdom collection for avatar</Label>
                                                    <TagCreator value={collection} onChange={setCollection} />
                                                </div>
                                                <div className="flex flex-wrap items-center mb-[24px]">
                                                    <Switch
                                                        checked={enabled1}
                                                        onChange={setEnabled1}
                                                        className={`${enabled1 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                                    >
                                                        <span className="sr-only">Use setting</span>
                                                        <span aria-hidden="true" className={`${enabled1 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                                                    </Switch>
                                                    <p className='text-[14px] fn fw-sb text-[#17192B] pl-[15px]'>Allow other avatar to answer questions</p>
                                                </div>

                                                <div className="flex flex-wrap items-center mb-[24px]">
                                                    <Switch
                                                        checked={enabled2}
                                                        onChange={setEnabled2}
                                                        className={`${enabled2 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                                    >
                                                        <span className="sr-only">Use setting</span>
                                                        <span aria-hidden="true" className={`${enabled2 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                                                    </Switch>
                                                    <p className='text-[14px] fn fw-sb text-[#17192B] pl-[15px]'>Chat Window</p>
                                                </div>

                                                <div className="flex flex-wrap items-center mb-[24px]">
                                                    <Switch
                                                        checked={enabled3}
                                                        onChange={setEnabled3}
                                                        className={`${enabled3 ? 'bg-[#8726B9]' : 'bg-[#D9D9EB]'} relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                                    >
                                                        <span className="sr-only">Use setting</span>
                                                        <span aria-hidden="true" className={`${enabled3 ? 'translate-x-4' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                                                    </Switch>
                                                    <p className='text-[14px] fn fw-sb text-[#17192B] pl-[15px]'>Wisdosity.com</p>
                                                </div>


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="bg-[#fff] text-[#8419BB] text-[16px] fn fw-sb border-[#8419BB] border px-8 py-2 rounded-full hover:text-gray-700 w-[48%] mr-[1%]" onClick={closeModal}>
                                Save
                            </button>
                            <button className="bg-[#8419BB] text-[#fff] text-[16px] fn fw-sb border-[#8419BB] border px-8 py-2 rounded-full  w-[48%] ml-[3%]" onClick={closeModal}>
                                Cancel
                            </button>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

interface TagCreatorProps {
    value: string[];
    onChange: (value: string[]) => void;
}

function TagCreator(props: TagCreatorProps) {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = useCallback(() => {
        const trimmedValue = inputValue.trim();
        if (!trimmedValue || props.value.includes(trimmedValue)) return;

        props.onChange([...props.value, trimmedValue]);
        setInputValue("");
    }, [inputValue, props]);

    const handleTagDelete = useCallback((tagToDelete: string) => {
        props.onChange(props.value.filter(tag => tag !== tagToDelete));
    }, [props]);

    return (
        <div className="flex flex-wrap items-center h-10 w-full p-1.5 border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {props.value.map(tag => (
                <div className="box-border h-7 px-3 pr-1.5 bg-purple-100 rounded-xl flex items-center text-[14px] max-h-[24px] m-[3px]" key={tag}>
                    {tag}
                    <XMarkIcon onClick={() => handleTagDelete(tag)} className="h-3 ml-1 cursor-pointer" />
                </div>
            ))}
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value.toLowerCase())}
                onKeyDown={e => e.key === "Enter" && handleAddTag()}
                placeholder="Add tag"
                className="block border-0 p-0 m-[3px] text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-0 focus:ring-0"
            />
        </div>
    );
}
