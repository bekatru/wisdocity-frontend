import Icon1 from '../../../../assets/home-assets/exclusive-icon-1.svg';
import Icon2 from '../../../../assets/home-assets/exclusive-icon-2.svg';

export function HomeExclusiveCommunity() {
    return (
        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">









                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/4 px-4 mb-4 ">
                        <div className="w-full text-left h-full">
                            <div className='flex justify-left items-left'>
                                <img src={Icon1} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4 ">
                        <div className="w-full  text-center items-center h-full">
                            <p className="fn fw-sb uppercase text-[18px] mt-[50px] mb-[20px] text-[#7F30AC]">
                                Join the best
                            </p>
                            <h2 className="text-white ft leading-none fw-r text-[64px] mb-[20px] text-[#321841]">Exclusive Expert <br />Community </h2>

                            <p className="fn fw-r leading-7 text-[18px] mb-[20px] text-[#321841]">Be part of Our Exclusive Expert Community and Immortalize Your Wisdom!</p>

                            <div className='text-center'>
                                <button type="button" className="text-white bg-btn-theme fn fw-b rounded-full px-8 py-4 text-center text-[18px]">Become an expert</button>

                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-4 mb-4 ">
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
