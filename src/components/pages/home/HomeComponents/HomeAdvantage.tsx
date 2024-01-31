import Icon1 from '../../../../assets/home-assets/advantage-icon-1.svg';
import Icon2 from '../../../../assets/home-assets/advantage-icon-2.svg';
import Icon3 from '../../../../assets/home-assets/advantage-icon-3.svg';

export function HomeAdvantage() {
    return (


        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-1xl lg:mx-0">
                    <h2 className="ft leading-none fw-r text-[64px] mb-[24px] text-[#321841]">Discover the WisdoCity Advantage</h2>
                    <p className="ft leading-9 fw-r text-[32px] mb-[55px] text-[#321841]">
                        Wisdocity offers a range of powerful features designed to enhance <br/>your learning experience:
                    </p>
                </div>

                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                        <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon1} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]">Personalized Learning Journey’s </h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">Customize your learning 24/7 with insights from global industry experts, tailoring the experience to your unique needs and goals.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                    <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon2} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]">Community Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Tap into the power of community feedback and observe how others learn to continuously enhance your skills. Foster a dynamic learning ecosystem that benefits both learners and experts.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                    <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon3} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]">Cost-Efficient Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Access top-tier education and expertise at a fraction of the cost of traditional one-on-one coaching or classes, making quality learning accessible to all.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                    <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon1} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]">Achieve Your Learning Goals </h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Set and track your learning objectives, allowing you to measure your growth and progress.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                    <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon2} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]"> Efficient Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Reduce learning time by focusing on areas where you need assistance. Trustworthy experts are at your disposal to provide guidance and expertise.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-[40px]">
                    <div className="max-w-sm p-4 bg-white rounded-lg shadow-f dark:bg-gray-800 text-center h-full mb-[40px]">
                            <div className='flex justify-center items-center mb-[12px]'>
                                <img src={Icon3} />
                            </div>
                            <h5 className="fn leading-7 fw-b text-[22px] mb-[12px] text-[#64108F]">Enhance Expert Impact</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Provide feedback to experts for more effective content, aiding their growth in assisting learners.
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}
