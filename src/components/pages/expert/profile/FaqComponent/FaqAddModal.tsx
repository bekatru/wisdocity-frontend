import { useState } from "react";
import { Input, Label, Button } from "components";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useAddFaq } from "modules/expert";
import { toast } from "react-toastify";

interface AddFaqProps {
  onAdd: (id: number, newQuestion: string, newAnswer: string) => void;
}
export function FaqAddModal(props: AddFaqProps) {
  // props: AddFaqProps
  const [isOpen, setIsOpen] = useState(false);
  const [faqQuestion, setFaqQuestion] = useState<string>("");
  const [faqAnswer, setFaqAnswer] = useState<string>("");
  const { mutate: addFaq, isPending } = useAddFaq({
    onSuccess: (response) => {
      toast.success("Faq Added successfully!");
      closeModal();
      setFaqQuestion("");
      setFaqAnswer("");
      props.onAdd(response.id, response.question, response.answer);
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
    addFaq({ question: faqQuestion, answer: faqAnswer });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="ms-auto justify-center items-center">
        <button className="text-black flex text-[#321841]" onClick={openModal}>
          {/* Add FAQ */}
          <PlusCircleIcon className="h-6 w-6 text-gray-500 ml-[7px] mt-[3px]" />
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
                        Add FAQ
                      </div>
                      <form>
                        <div className="mb-[24px]">
                          <Label className="flex text-[16px] fn fw-sb text-[#321841] mb-[6px]">
                            Question
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
                            Answer
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
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
