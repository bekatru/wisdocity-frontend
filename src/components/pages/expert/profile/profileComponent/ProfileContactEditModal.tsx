import { useState } from "react";
import { Input, Label, Button } from "components";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditProfileContact } from "modules/expert";
import { toast } from "react-toastify";

interface ProfileContactEditModalProps {
  contactNumber: string;
  email: string;
  address: string;
  expertId: number;
  onProfileUpdate: (
    newContactNumber: string,
    newEmail: string,
    newAddress: string
  ) => void;
}
export function ProfileContactEditModal(props: ProfileContactEditModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contactNumber, setContactNumber] = useState<string>(
    props.contactNumber
  );
  const [email, setEmail] = useState<string>(props.email);
  const [address, setAddress] = useState<string>(props.address);
  const [expertId] = useState<number>(props.expertId);

  const { mutate: editProfileContact, isPending } = useEditProfileContact({
    onSuccess: () => {
      toast.success("Profile contact updated successfully!");
      props.onProfileUpdate(contactNumber, email, address);
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
    editProfileContact({ id: expertId, contactNumber, email, address });
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
                        Edit Contact
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Contact Number
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                          />
                        </div>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Email
                          </Label>
                          <Input
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Address
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
