import { useState } from "react";
import { Input, Label, Button } from "components";
import EditIcon from "../../../../../assets/profile/icon-edit.svg";
import { useEditFaq } from "modules/expert";
import { toast } from "react-toastify";

interface FaqEditModalProps {
  faqQuestion: string;
  faqAnswer: string;
  faqId: number;
  onUpdate: (id: number, newQuestion: string, newAnswer: string) => void;
}

export function FaqEditModal(props: FaqEditModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [faqQuestion, setFaqQuestion] = useState<string>(props.faqQuestion);
  const [faqAnswer, setFaqAnswer] = useState<string>(props.faqAnswer);
  const [faqId] = useState<number>(props.faqId);

  const { mutate: editFaq, isPending } = useEditFaq({
    onSuccess: (response) => {
      console.log(response);
      toast.success("Faq updated successfully!");
      closeModal();
      props.onUpdate(response.id, response.question, response.answer);
    },
    onError: (error) => {
      console.log(error.response?.data.message);
      if (
        error.response?.data?.message &&
        error.response.data.message.length > 0
      ) {
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
    editFaq({ question: faqQuestion, answer: faqAnswer, id: faqId });
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

      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-md w-full mx-auto z-50 card shadow-p bg-white px-6 py-6  mb-[34px]">
            <div>
              <div className="flex w-full">
                <div className="box-body w-full">
                  <div className="flex align-center w-full">
                    <div className="w-full">
                      <div className="text-center text-[20px] fn fw-b text-[#321841] mb-[24px]">
                        Edit FAQ
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Faq Question
                          </Label>
                          <Input
                            type="text"
                            placeholder=""
                            value={faqQuestion}
                            onChange={(e) => setFaqQuestion(e.target.value)}
                          />
                        </div>

                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Faq Content
                          </Label>
                          <textarea
                            value={faqAnswer}
                            onChange={(e) => setFaqAnswer(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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
                  className="fn fw-r rounded-full px-6 py-1 text-center text-[14px] mr-[15px] mt-4"
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
