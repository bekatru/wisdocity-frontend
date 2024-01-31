import StepIcon1 from '../../../../assets/home-assets/step-1-icon.svg';
import StepIcon2 from '../../../../assets/home-assets/step-2-icon.svg';
import StepIcon3 from '../../../../assets/home-assets/step-3-icon.svg';
import PlaceholderIcon from '../../../../assets/home-assets/placeholder.png';

export function HomeLearnerSteps() {
    return (
        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">


                <div className="pt-10 pb-10 pl-6 pr-20 bg-steps mb-[100px]">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 text-left h-full">
                                <h2 className='float-left fms leading-none fw-r text-[170px] mt-[30px] mb-[16px] mr-[32px] text-[#F1F0F7]'>1</h2>
                                <header>
                                    <img className='float-left mr-[32px] mt-[10px] mb-[140px]' src={StepIcon1} />
                                    <h4 className='fms leading-tight fw-m text-[56px] mb-[20px] text-[#F1F0F7]'>Reach Global <br/>Learners<br/> Instantly</h4>
                                    <p className='fn leading-normal fw-sb text-[16px] mb-[5px] text-[#F9F7FB] pl-[120px]'>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                                </header>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-end items-right mt-[65px]'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 pb-10 pl-10 pr-6 bg-steps mb-[100px]">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-start items-left mt-[65px]'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>
                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 text-left h-full">
                                <h2 className='float-left fms leading-none fw-r text-[170px] mt-[30px] mb-[16px] mr-[32px] text-[#F1F0F7]'>2</h2>
                                <header>
                                    <img className='float-left mr-[32px] mt-[10px] mb-[140px]' src={StepIcon2} />
                                    <h4 className='fms leading-tight fw-m text-[56px] mb-[20px] text-[#F1F0F7]'>Reach Global <br/>Learners<br/> Instantly</h4>
                                    <p className='fn leading-normal fw-sb text-[16px] mb-[5px] text-[#F9F7FB] pl-[120px]'>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                                </header>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="pt-10 pb-10 pl-6 pr-20 bg-steps mb-[100px]">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 text-left h-full">
                                <h2 className='float-left fms leading-none fw-r text-[170px] mt-[30px] mb-[16px] mr-[32px] text-[#F1F0F7]'>3</h2>
                                <header>
                                    <img className='float-left mr-[32px] mt-[10px] mb-[140px]' src={StepIcon3} />
                                    <h4 className='fms leading-tight fw-m text-[56px] mb-[20px] text-[#F1F0F7]'>Reach Global <br/>Learners<br/> Instantly</h4>
                                    <p className='fn leading-normal fw-sb text-[16px] mb-[5px] text-[#F9F7FB] pl-[120px]'>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                                </header>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-end items-right mt-[65px]'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>
                    </div>
                </div>

               

            </div>
        </div>
    );
}
