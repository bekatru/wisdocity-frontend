import { useState, useEffect } from "react";
import { FaqEditModal } from "./FaqEditModal";
import { FaqAddModal } from "./FaqAddModal";
import { toast } from "react-toastify";
import { useDeleteFaq } from "modules/expert";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface FaqProps {
  faqs: { question: string; answer: string; id: number }[];
}

export function Faq(props: FaqProps) {
  const [faqs, setFaqs] = useState(props.faqs);
  const [accordionState, setAccordionState] = useState<boolean[]>(
    props.faqs ? new Array(props.faqs.length).fill(false) : []
  );

  useEffect(() => {
    if (props.faqs) {
      setFaqs(props.faqs);
      setAccordionState(new Array(props.faqs.length).fill(false));
    }
  }, [props.faqs]);

  const toggleAccordion = (index: number) => {
    const newState = [...accordionState];
    newState[index] = !newState[index];
    setAccordionState(newState);
  };
  const handleUpdate = (id: number, newQuestion: string, newAnswer: string) => {
    const updatedFaqs = faqs.map((faq, _) => {
      if (faq.id === id) {
        return { id: id, question: newQuestion, answer: newAnswer };
      }
      return faq;
    });
    setFaqs(updatedFaqs);
  };

  const handleAdd = (id: number, newQuestion: string, newAnswer: string) => {
    const newFaq = {
      question: newQuestion,
      answer: newAnswer,
      id: id, // Generate a new unique ID
    };
    const updatedFaqs = [...faqs, newFaq];
    setFaqs(updatedFaqs);
  };

  const { mutate: deleteFaq } = useDeleteFaq({
    onSuccess: (response) => {
      const updatedFaqs = faqs.filter((faq) => faq.id !== response.id);
      setFaqs(updatedFaqs);
      toast.success("Faq deleted successfully!");
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

  const handleDeleteFaq = (id: number) => {
    deleteFaq({ id });
  };

  return (
    <>
      <div className="card shadow-p bg-white px-6 py-6 md:max-w-[90%]">
        <h4 className="fn text-[#321841] fw-b text-[20px] mb-[16px] flex justify-between">
          Frequently Asked Questions
          <FaqAddModal onAdd={handleAdd} />
        </h4>
        <div className="flex flex-wrap -mx-4 w-full">
          {/* Accordion 1 */}

          {faqs &&
            faqs.map((data, index) => (
              <div className="w-full md:w-1/2 px-4">
                <div className="card rounded-xl bg-[#F7F1FD] px-4 py-4 mb-[20px] relative">
                  <div
                    className="cursor-pointer flex items-center justify-between"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="text-[14px] fn fw-sb text-[#17192B]">
                      <span className="mr-[12px]">{index + 1}</span>{" "}
                      {data.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="mr-[10px] mt-[5px]">
                        <button
                          className="text-black float-right w-6 h-6 mt-1 cursor-pointer absolute right-[70px] top-[18px]"
                          onClick={() => handleDeleteFaq(data.id)}
                        >
                          {" "}
                          <XMarkIcon />
                          {/* <img src={EditIcon} alt="Edit" /> */}
                        </button>
                        <FaqEditModal
                          faqQuestion={data.question}
                          faqAnswer={data.answer}
                          faqId={data.id}
                          onUpdate={handleUpdate}
                        />
                      </span>
                      {accordionState[index] ? (
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="10"
                            viewBox="0 0 16 10"
                            fill="none"
                          >
                            <path
                              d="M1 8.5L8 1.5L15 8.5"
                              stroke="#19212A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="10"
                            viewBox="0 0 16 10"
                            fill="none"
                          >
                            <path
                              d="M15 1.5L8 8.5L1 1.5"
                              stroke="#19212A"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  {accordionState[index] && (
                    <div className="py-4 px-6 left-0 rounded-xl bg-[#F7F1FD] pb-[5px]">
                      <p className="text-[14px] fn fw-r text-[#212D38]">
                        {data.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
