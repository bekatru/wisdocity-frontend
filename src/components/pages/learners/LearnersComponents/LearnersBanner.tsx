import BannerImg from "../../../../assets/learner-assets/learner-banner.svg";

export function LearnersBanner() {
    return (
        <div className="bg-banner sm:py-20 flex items-center justify-center h-screen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4 avatar_cards">

                    <div className="w-full md:w-1/2 px-4 mb-[20px] flex items-center justify-center">
                        <div>
                            <h1 className="ft leading-none text-[64px] mb-[32px] text-[#321841]">Wisdom of <br />Industry Experts </h1>
                            <p className="mb-3 font-normal fn fw-r text-[18px] mb-[56px] text-[#321841]">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.
                            </p>
                            <button type="button" className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-8 py-4 text-center text-[16px]">Become a learner</button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-[20px]">
                        <div className='flex justify-end items-center avatar-header mb-[15px]'>
                            <img src={BannerImg} alt="Banner Image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
