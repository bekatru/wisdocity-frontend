import { useState } from 'react';
import { Input, Label ,Button} from "components";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditProfileBio } from "modules/expert";
import { toast } from "react-toastify";

interface ProfileCategoryEditModalProps {
    categories: string;
    expertId:number;
    onProfileCategoryUpdate: (newCategories: string) => void;

}
export function ProfileCategoryEditModal(props: ProfileCategoryEditModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState<string>(props.categories);
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<string[]>([]); // Specify the type as string[]
   
    const [expertId] = useState<number>(props.expertId);

    const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Specify the event type
        setTagInput(event.target.value);
    };

    const handleTagInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { // Specify the event type
        if (event.key === 'Enter' && tagInput.trim() !== '') {
            event.preventDefault(); // Prevent default form submission behavior
            setTags([...tags, tagInput.trim()]);
            setTagInput(''); // Clear input after adding tag
        }
    };

    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    // const {mutate: editProfileBio, isPending} = useEditProfileBio({
    //     onSuccess: () => {
    //         toast.success("Profile updated successfully!");
    //         props.onProfileCategoryUpdate(categories);
            
    //     },
    //     onError: (error) => {
    //         console.log(error.response?.data.message);
    //         if (error.response?.data?.message && error.response.data.message.length > 0) {
    //             // If error message is an array, iterate over it and display each message
    //             if (Array.isArray(error.response.data.message)) {
    //               error.response.data.message.forEach(errorMessage => {
    //                 toast.error(errorMessage);
    //               });
    //             } else {
    //               toast.error(error.response.data.message);
    //             }
    //       }
    //     }
    // })

    const handleSubmit = () => {
        // editProfileB({id:expertId,bio});
    }



    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    

    return (
        <>
            <div className="ms-auto ">
                <button className="text-black min-w-[24px]" onClick={openModal}>
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
                                            <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">Edit Categories
                                            </div>
                                            <form>
                                                <div className="mb-[24px]">
                                                    <Label className='flex text-[16px] fn fw-sb text-[#321841] mb-[6px]'>Categories</Label>
                                                    <Input type="text" placeholder="" value={categories} onChange={(e) => setCategories(e.target.value)}/>
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
                            <div className='flex'>
                            <Button
                                className="fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4"
                                fullWidth = {false}
                                onClick={closeModal}
                                variant="outlined"
                            >
                                Close
                            </Button>
                            <Button
                                className=" fn fw-r rounded-full px-6 py-1 text-center text-[14px] mr-[15px] mt-4"
                                variant="primary"
                                
                                fullWidth = {false}
                                onClick={handleSubmit}
                                //  isPending={isPending}
                            >
                                Edit
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
