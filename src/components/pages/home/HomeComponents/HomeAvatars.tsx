import IconStar from '../../../../assets/home-assets/icon-star.svg';

export function HomeAvatars() {
    return (
        <div className="bg-none pt-24 sm:py-20 pb-0  mb-[0px]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto w-full lg:mx-0 text-center">
                    <h2 className=" ft leading-normal	 text-[64px] mb-[5px] text-[#321841]">Enhanced Learning via Avatars</h2>
                    <p className="fn  fw-r  text-[18px] mb-[80px] text-[#321841]">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim <br />veniam, quis nostrud exercitation.
                    </p>
                </div>

                <div className="flex flex-wrap -mx-4 avatar_cards">

                    <div className="w-full md:w-1/2 px-4  mb-[20px]">
                        <div className="w-full p-6 bg-white rounded-lg shadow-d dark:bg-gray-800 text-left h-full min-h-56">
                            <div className='flex justify-start items-left avatar-header mb-[15px]'>
                                <img className='mr-[15px]' src={IconStar} />
                                <h5 className="mb-2 mt-3 fn font-bold text-[24px] text-[#64108F]">Trusted Experts avatars</h5>
                            </div>
                            <p className="mb-3 font-normal fn text-[16px] text-[#321841]">Wisdocity's experts are industry leaders with extensive knowledge, skills, and years of hands-on experience. Our rigorous selection process guarantees top-notch guidance in a wide range of subjects. 89% of learners perform better when they know the expertise of their mentors.</p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-[20px]">
                        <div className="w-full p-6 bg-white rounded-lg shadow-d dark:bg-gray-800 text-left h-full min-h-56">
                            <div className='flex justify-start items-left avatar-header mb-[15px]'>
                                <img className='mr-[15px]' src={IconStar} />
                                <h5 className="mb-2 mt-3 fn font-bold text-[24px] text-[#64108F]">Personalized & Interactive</h5>
                            </div>
                            <p className="mb-3 font-normal fn text-[16px] text-[#321841]">
                                Gain tailored and engaging insights from industry experts. 86% of learners find personalized learning more effective
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-[20px]">
                        <div className="w-full p-6 bg-white rounded-lg shadow-d dark:bg-gray-800 text-left h-full min-h-56">
                            <div className='flex justify-start items-left avatar-header mb-[15px]'>
                                <img className='mr-[15px]' src={IconStar} />
                                <h5 className="mb-2 mt-3 fn font-bold text-[24px] text-[#64108F]">Cost-Effective</h5>
                            </div>
                            <p className="mb-3 font-normal fn text-[16px] text-[#321841]">Access expertise at a fraction of the cost. 75% of learners say cost is a barrier to accessing education.
                            </p>

                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-[20px]">
                        <div className="w-full p-6 bg-white rounded-lg shadow-d dark:bg-gray-800 text-left h-full min-h-56">
                            <div className='flex justify-start items-left avatar-header mb-[15px]'>
                                <img className='mr-[15px]' src={IconStar} />
                                <h5 className="mb-2 mt-3 fn font-bold text-[24px] text-[#64108F]">Unlimited Availability 24/7</h5>
                            </div>
                            <p className="mb-3 font-normal fn text-[16px] text-[#321841]">No scheduling conflicts; they're ready when you are.</p>

                        </div>
                    </div>



                </div>

                <div className='text-center'>
                    <button type="button" className="text-white bg-btn-theme fn fw-b rounded-full px-8 py-4 text-center text-[18px] mt-[60px]">Become a learner</button>
                </div>

            </div>
        </div>
    );
}
