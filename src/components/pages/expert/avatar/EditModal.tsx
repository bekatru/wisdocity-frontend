import { useState } from 'react';
import { Input, Label } from "components";
import EditIcon from "../../../../assets/profile/icon-edit.svg";

export function EditModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleTagInputChange = (event) => {
        setTagInput(event.target.value);
    };

    const handleTagInputKeyDown = (event) => {
        if (event.key === 'Enter' && tagInput.trim() !== '') {
            event.preventDefault(); // Prevent default form submission behavior
            setTags([...tags, tagInput.trim()]);
            setTagInput(''); // Clear input after adding tag
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="ms-auto">
                <button className="text-black" onClick={openModal}>
                    <img src={EditIcon} alt="Edit" />
                </button>
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className=" max-w-md w-full mx-auto z-50 card shadow-p bg-white px-6 py-6  mb-[34px]">
                        {/* Your modal content goes here */}
                        <div>
                            <div className="flex w-full">
                                <div className="box-body w-full">
                                    <div className="flex align-center w-full">
                                        <div className="w-full">
                                            <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">Edit Avatar</div>
                                            <form>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Displayed Name</Label>
                                                    <Input type="text" placeholder="Interviews" />
                                                </div>
                                                <div className="mb-[24px]">
                                                    <Input type='file'/>
                                                    <Label>Upload avatar</Label>
                                                </div>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Add tags</Label>
                                                    <Input
                                                        type="text"
                                                        placeholder="Add Tags"
                                                        value={tagInput}
                                                        onChange={handleTagInputChange}
                                                        onKeyDown={handleTagInputKeyDown}
                                                    />
                                                    <div className="mt-2">
                                                        {tags.map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                                            >
                                                                {tag}
                                                                <button
                                                                    type="button"
                                                                    className="ml-2"
                                                                    onClick={() => removeTag(index)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Close button */}
                            <button
                                className="text-sm text-gray-500 hover:text-gray-700"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
