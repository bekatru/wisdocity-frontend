import StepIcon1 from '../../../../assets/home-assets/step-1-icon.svg';
import StepIcon2 from '../../../../assets/home-assets/step-2-icon.svg';
import StepIcon3 from '../../../../assets/home-assets/step-3-icon.svg';

export function HomeLearnerSteps() {
    return (
        <div className="bg-none pt-5 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full bg-[#F6E3FF] rounded-[32px] text-left h-full  relative overflow-hidden	">
                            <div className='relative  pt-8'>
                                <h5 className="px-6 ft fw-b text-[20px] mb-[14px] text-[#321841]">Reach Global Learners Instantly</h5>
                                <p className="px-6 fn fw-sb leading-6 text-[16px] mb-[12px] text-[#6B6985]">Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                            </div>
                            <div className='absolute bottom-0 flex justify-center items-center w-full'>
                                <img className='w-full' src={StepIcon1} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full bg-[#F6E3FF] rounded-[32px] text-left h-full  relative overflow-hidden">
                            <div className='top-0 flex justify-center items-center w-full'>
                                <img className='w-full' src={StepIcon2} />
                            </div>
                            <div className='relative pt-8'>
                                <h5 className="px-6 ft fw-b text-[20px] mb-[14px] mt-[30px] text-[#321841]">Join Our Exclusive Expert Community</h5>
                                <p className="px-6 fn fw-sb leading-6 text-[16px] mb-[38px] text-[#6B6985]">Become part of a handpicked community of experts in your field. Strengthen your personal brand while learning from other industry leaders. Together, we elevate knowledge to new heights.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full  bg-[#F6E3FF] rounded-[32px] text-left h-full  relative overflow-hidden	">
                            <div className='relative pt-8'>
                                <h5 className="px-6 ft fw-b text-[20px] mb-[14px] text-[#321841]">Unlock Passive Income Opportunities</h5>
                                <p className="px-6 fn fw-sb leading-6 text-[16px] mb-[12px] text-[#6B6985]">Say goodbye to repetitive teaching and speaking engagements. Once your expertise is integrated into our system, your digital avatar takes the reins, allowing you to generate income effortlessly. Join WisdoCity and maximize your earnings potential while your avatar does the heavy lifting.</p>
                            </div>
                            <div className='absolute bottom-0 flex justify-center items-center w-full'>
                                <img className='w-full' src={StepIcon3} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
