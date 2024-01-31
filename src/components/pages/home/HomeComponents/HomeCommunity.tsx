import IconStar from '../../../../assets/home-assets/icon-star.svg';

export function HomeCommunity() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">



                <div className="mx-auto w-full lg:mx-0 text-center">
                    <p className="mt-2 text-lg leading-8 text-gray-600 text-[#321841]">
                        Learn here
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-[#321841]">Unlock the Power of Community <br /> Learning at WisdoCity!</h2>
                </div>





                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                            <h5 className="mb-2 text-2xl font-semibold text-gray-900 text-[#64108F]">Connect with Your Role Models and Experts</h5>
                            <p className="mb-3 font-normal text-gray-500 text-[#64108F]">Discover a unique opportunity to engage with your role models and industry experts. Ask questions, seek guidance, and gain personalized insights tailored to your situation and understanding.</p>
                            <div className='flex justify-center items-center'>
                                <img src={IconStar} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                            <h5 className="mb-2 text-2xl font-semibold text-gray-900 text-[#64108F]">Join a Thriving Learning Community</h5>
                            <p className="mb-3 font-normal text-gray-500 text-[#64108F]">Be part of a dynamic community of like-minded learners. Collaborate, discuss, and brainstorm with fellow enthusiasts. Learn not just from the experts but also from each other's experiences and perspectives.</p>
                            <div className='flex justify-center items-center'>
                                <img src={IconStar} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                            <h5 className="mb-2 text-2xl font-semibold text-gray-900 text-[#64108F]">Shape the Learning Experience</h5>
                            <p className="mb-3 font-normal text-gray-500 text-[#64108F]">Your feedback matters! Help our experts refine their guidance by providing valuable insights. Your input ensures that the learning experience continually evolves to meet your needs and those of fellow learners.</p>
                            <div className='flex justify-center items-center'>
                                <img src={IconStar} />
                            </div>
                        </div>
                    </div>

                    

                </div>

                <div className='text-center'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join WisdoCity </button>

                </div>

            </div>
        </div>
    );
}
