import { CheckCircleIcon } from "@heroicons/react/16/solid";
import ChooseIcon from "../../../../assets/experts-assets/choose-wisdocity.png";

export function WhyChoose() {
    return (
        <>





            <div className="bg-none py-24 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="bg-[#BFB9FF] rounded-[50px] py-8 px-8 mb-[70px]">

                        <div className="flex flex-wrap avatar_cards h-full">
                            <div className="w-full md:w-1/2 px-0 mb-[0px] flex items-center justify-center">
                                <div className="flex flex-col justify-center">
                                    <h4 className='ft fw-r text-[45px] text-[#321841] mb-[20px]'>Why choose Wisdocity?</h4>

                                    <ul className="list-none flex flex-col justify-start fn fw-r text-[18px] text-[#321841]">
                                        <li className="flex items-center mb-[18px]">
                                            <span className="w-6 h-6 flex-shrink-0 text-[#8726B9]"><CheckCircleIcon className="h-full w-full" /></span>
                                            <span className="ml-4">Stay accessible around the clock through your digital avatar.</span>
                                        </li>

                                        <li className="flex items-center mb-[18px]">
                                            <span className="w-6 h-6 flex-shrink-0 text-[#8726B9]"><CheckCircleIcon className="h-full w-full" /></span>
                                            <span className="ml-4">Obtain valuable insights into learner progress, interests, and accomplishments.</span>
                                        </li>

                                        <li className="flex items-center mb-[18px]">
                                            <span className="w-6 h-6 flex-shrink-0 text-[#8726B9]"><CheckCircleIcon className="h-full w-full" /></span>
                                            <span className="ml-4">Tap into the expertise of fellow experts when learners seek further guidance.</span>
                                        </li>

                                        <li className="flex items-center mb-[18px]">
                                            <span className="w-6 h-6 flex-shrink-0 text-[#8726B9]"><CheckCircleIcon className="h-full w-full" /></span>
                                            <span className="ml-4">Enhance your expertise through interactions with learners and peers on Wisdocity.</span>
                                        </li>

                                        <li className="flex items-center mb-[18px]">
                                            <span className="w-6 h-6 flex-shrink-0 text-[#8726B9]"><CheckCircleIcon className="h-full w-full" /></span>
                                            <span className="ml-4">Once your wisdom is uploaded, it can be leveraged exponentially without the need for repetitive explanations, freeing up your time and enabling limitless outreach.</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-0 mb-[0px]">
                                <div className='flex justify-end items-center avatar-header'>
                                    <img className="" src={ChooseIcon} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-[50px]">
                        <h4 className="fn fw-b text-[38px] mb-[0px] mt-[30px] text-[#321841]">Immortalize your Wisdom, Join Wisdocity!</h4>
                        <button type="button" className="text-white bg-btn-theme fn fw-b rounded-full px-10 py-3 text-center text-[18px] mt-[30px]">Join Wisdocity</button>
                    </div>

                </div>
            </div>





        </>
    )
}
