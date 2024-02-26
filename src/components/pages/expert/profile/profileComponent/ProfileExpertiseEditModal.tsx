import { useCallback, useState } from "react";
import { Label, Button } from "components";
import { XMarkIcon } from "@heroicons/react/16/solid";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditProfileExpertise } from "modules/expert";
import { toast } from "react-toastify";

interface ProfileExpertiseEditModalProps {
  expertises: string[];
  expertId: number;
  onProfileExpertiseUpdate: (newExpertise: string[]) => void;
}
export function ProfileExpertiseEditModal(
  props: ProfileExpertiseEditModalProps
) {
  const [isOpen, setIsOpen] = useState(false);
  const [expertises, setExpertises] = useState<string[]>(props.expertises);
  const [expertId] = useState<number>(props.expertId);

  const { mutate: editProfileExpertise, isPending } = useEditProfileExpertise({
    onSuccess: () => {
      toast.success("Expertise updated successfully!");
      props.onProfileExpertiseUpdate(expertises);
      closeModal();
    },
    onError: (error) => {
      console.log(error.response?.data.message);
      if (
        error.response?.data?.message &&
        error.response.data.message.length > 0
      ) {
        // If error message is an array, iterate over it and display each message
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
  });

  const handleSubmit = () => {
    editProfileExpertise({ id: expertId, expertises });
  };

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
                      <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">
                        Edit Expertises
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Add Expertise
                          </Label>
                          <TagCreator
                            value={expertises}
                            placeholder="Add Expertise"
                            onChange={setExpertises}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Close button */}
              <div className="flex">
                <Button
                  className="fn fw-r rounded-full px-5 py-1 text-center text-[14px] mr-[15px] mt-4"
                  fullWidth={false}
                  onClick={closeModal}
                  variant="outlined"
                >
                  Close
                </Button>
                <Button
                  className=" fn fw-r rounded-full px-6 py-1 text-center text-[14px] mr-[15px] mt-4"
                  variant="primary"
                  fullWidth={false}
                  onClick={handleSubmit}
                  isPending={isPending}
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

interface TagCreatorProps {
  value: string[];
  placeholder: string;
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

  const handleTagDelete = useCallback(
    (tagToDelete: string) => {
      props.onChange(props.value.filter((tag) => tag !== tagToDelete));
    },
    [props]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleAddTag();
    }
  };

  return (
    <div className="flex flex-wrap items-center min-h-10 w-full p-1.5 border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {props.value.map((tag) => (
        <div
          className="box-border h-7 px-3 pr-1.5 bg-purple-100 rounded-xl flex items-center text-[14px] max-h-[24px] m-[3px]"
          key={tag}
        >
          {tag}
          <XMarkIcon
            onClick={() => handleTagDelete(tag)}
            className="h-3 ml-1 cursor-pointer"
          />
        </div>
      ))}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        onKeyDown={handleKeyDown} // Handle key press event
        placeholder={props.placeholder}
        className="block border-0 p-0 m-[3px] text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-0 focus:ring-0"
      />
    </div>
  );
}
