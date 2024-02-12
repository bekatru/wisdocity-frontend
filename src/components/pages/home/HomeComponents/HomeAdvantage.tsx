import Icon1 from '../../../../assets/home-assets/advantage-icon-1.png';
import Icon2 from '../../../../assets/home-assets/advantage-icon-2.png';
import Icon3 from '../../../../assets/home-assets/advantage-icon-3.png';
import Icon4 from '../../../../assets/home-assets/advantage-icon-4.png';
import Icon5 from '../../../../assets/home-assets/advantage-icon-5.png';
import Icon6 from '../../../../assets/home-assets/advantage-icon-6.png';

export function HomeAdvantage() {
    return (


        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-1xl lg:mx-0">
                    <h2 className="ft leading-none fw-r text-[64px] mb-[44px] mt-[30px] text-[#321841]">Discover the Wisdocity Advantage</h2>
                </div>




                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Personalized Learning Journeys</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                                Customize your learning 24/7 with insights from global industry experts, tailoring the experience to your unique needs and goals.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={Icon1} />
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <img src={Icon2} />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Community Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Tap into the power of community feedback and observe how others learn to continuously enhance your skills. Foster a dynamic learning ecosystem that benefits both learners and experts.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Cost-Efficient Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Access top-tier education and expertise at a fraction of the cost of traditional one-on-one coaching or classes, making quality learning accessible to all.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={Icon3} />
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <img src={Icon4} />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Achieve Your Learning Goals </h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                            Set and track your learning objectives, allowing you to measure your growth and progress.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Efficient Learning</h5>
                            <p className="fn leading-6 fw-r text-[16px] mb-[6px] text-[#64108F]">
                                Reduce learning time by focusing on areas where you need assistance. Trustworthy experts are at your disposal to provide guidance and expertise.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={Icon5} />
                        </div>
                    </div>
                </div>


                <div className="w-full bg-white rounded-lg shadow-d dark:bg-gray-800 text-center h-full mb-[40px]">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <img src={Icon6} />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-8">
                            <h5 className="fn leading-7 fw-b text-[30px] mb-[14px] text-[#321841]">Enhance Expert Impact</h5>
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
