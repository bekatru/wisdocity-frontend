import BannerImg from "../../../../assets/experts-assets/expert-banner.png";


export function ExpertsBanner() {
    return (
        <>
            <div className="bg-banner sm:py-0 py-0 flex items-center justify-center relative min-h-[722px]">

                    <div className="absolute top-0 z-10 top-0 left-0 w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 px-0 mb-[0px] flex items-center justify-center">
                            </div>
                            <div className="w-full md:w-1/2 px-0 mb-[0px]">
                                <div className='flex justify-end items-center avatar-header'>
                                    <img className="" src={BannerImg} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute z-20 w-full top-0 h-full">
                        <div className="mx-auto max-w-7xl container px-6 lg:px-8 h-full">
                            <div className="flex flex-wrap avatar_cards h-full">
                                <div className="w-full md:w-1/2 px-0 mb-[0px] flex items-center justify-start">
                                    <div className="flex flex-col justify-center">
                                        <h1 className="ft leading-none text-[64px] mb-[32px] text-[#321841]">Immortalize <br />your Wisdom </h1>
                                        <p className="mb-3 font-normal fn fw-r text-[18px] mb-[56px] text-[#321841]">
                                            Extend Your Expertise Globally, Beyond <br />Physical Boundaries. Maximize Outreach, Save <br />Time – Your Digital Avatar, Available 24/7.
                                        </p>
                                        <div className="flex justify-start">
                                            <button type="button" className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-10 py-3 text-center text-[16px]">Join as an expert</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-0 mb-[0px]">

                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        </>
    )
}
