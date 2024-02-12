import { useCallback, useState } from "react";
import { Input, Label, Button } from "components";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditProfileBio, useEditProfileSocialMedia } from "modules/expert";
import { toast } from "react-toastify";
import { editProfileSocialMedia } from "modules/expert/profile/api/requests";
import UrlIcon from "assets/png/url.png";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface ProfileSocialMediaEditModalProps {
  socialMedia: string[];
  expertId: number;
  onProfileSocialMediaUpdate: (newCategories: string[]) => void;
}
export function ProfileSocialMediaEditModal(
  props: ProfileSocialMediaEditModalProps
) {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState<string>("");
  const [socialMedia, setSocialMedia] = useState<string[]>(props.socialMedia);

  const [expertId] = useState<number>(props.expertId);

  const handleDeleteLink = useCallback(
    (linkIndex: number) => {
      const linksCopy = [...socialMedia];
      linksCopy.splice(linkIndex, 1);
      setSocialMedia(linksCopy);
    },
    [socialMedia, setSocialMedia]
  );

  const handleAddLink = useCallback(() => {
    if (socialMedia.includes(link)) {
      toast.warn("Link already added");
      return setLink("");
    }

    setSocialMedia([...socialMedia, link]);
    setLink("");
  }, [link, socialMedia, setLink, setSocialMedia]);

  const { mutate: editProfileSocialMedia, isPending } =
    useEditProfileSocialMedia({
      onSuccess: () => {
        toast.success("Profile updated successfully!");
        props.onProfileSocialMediaUpdate(socialMedia);
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
    editProfileSocialMedia({ id: expertId, socialMedia });
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
                        Edit Social Media Links
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Social Media Links
                          </Label>
                          <form
                            className="flex space-x-2"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddLink();
                            }}
                          >
                            <Input
                              type="url"
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

                          <div className="grid grid-cols-3 grid-flow-row gap-2">
                            {Object.values(socialMedia).map((link, index) => (
                              <div
                                className="pl-2 pr-6 py-3 h-12 shadow-md flex items-center relative rounded"
                                key={link}
                              >
                                <img
                                  className="h-6 w-6 mr-2"
                                  src={UrlIcon}
                                  alt={"url"}
                                />
                                <span className="text-nowrap overflow-hidden text-ellipsis text-sm">
                                  {link}
                                </span>
                                <XMarkIcon
                                  onClick={() => handleDeleteLink(index)}
                                  className="h-4 w-4 text-gray-500 absolute top-1 right-1 cursor-pointer"
                                />
                              </div>
                            ))}
                          </div>
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
