import Icon1 from '../../../../assets/home-assets/exclusive-icon-1.svg';
import Icon2 from '../../../../assets/home-assets/exclusive-icon-2.svg';

export function HomeExclusiveCommunity() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">









                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full text-left h-full">
                            <div className='flex justify-left items-left'>
                                <img src={Icon1} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full  text-center items-center h-full">
                            <span className="mt-2 text-lg leading-8 text-gray-600 text-[#321841]">
                                Join the best
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-[#321841]">Exclusive Expert <br />Community </h2>

                            <p className="mt-2 text-lg leading-8 text-gray-600 text-[#321841]">Be part of Our Exclusive Expert Community and Immortalize Your Wisdom!</p>

                            <div className='text-center'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Become an expert</button>

                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full text-right h-full">
                            <div className='flex justify-end items-right'>
                                <img src={Icon2} />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
}
