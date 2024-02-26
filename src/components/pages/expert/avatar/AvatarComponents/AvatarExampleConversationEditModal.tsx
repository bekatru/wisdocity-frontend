import { useState } from "react";
import { Label, Button } from "components";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditExampleConversations } from "modules/expert";
import { toast } from "react-toastify";

interface AvatarExampleConvesationEditModalProps {
  exampleConversations: string;
  id: number;
  userId: number;
  onExampleConversationUpdate: (newExampleConversation: string) => void;
}
export function AvatarExampleConvesationEditModal(
  props: AvatarExampleConvesationEditModalProps
) {
  const [isOpen, setIsOpen] = useState(false);
  const [exampleConversations, setExampleConversations] = useState<string>(
    props.exampleConversations
  );
  const [id] = useState<number>(props.id);
  console.log("avatr id", id);

  const { mutate: editExampleConversations, isPending } =
    useEditExampleConversations({
      onSuccess: () => {
        toast.success("Example of Conversations updated successfully!");
        props.onExampleConversationUpdate(exampleConversations);
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
    editExampleConversations({
      id,
      exampleConversations,
      userId: props.userId,
    });
  };

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
                      <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">
                        Edit Example of your Conversations
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Example of your Conversationss
                          </Label>
                          <textarea
                            value={exampleConversations}
                            rows={10}
                            onChange={(e) =>
                              setExampleConversations(e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                          ></textarea>
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
