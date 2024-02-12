import CommunityIcon from "../../../../assets/experts-assets/community.png";

export function ExpertsCommunity() {
    return (
        <>
          <div className="bg-none py-20 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full lg:mx-0 text-left">
                    <h4 className="ft leading-normal text-[64px] mb-[30px] text-[#321841]">Our Learners Community</h4>
                </div>

                <div className="flex flex-wrap -mx-4 avatar_cards">
                    <div className="w-full md:w-1/2 px-4  mb-[20px]">
                        <div className="w-full px-0 text-left h-full">
                            <p className="fn fw-r text-[18px] mb-[38px] text-[#321841]">
                                Whether students aiming for academic success, professionals staying current in their fields, or lifelong learners exploring new interests, Wisdocity unites a vibrant community of learners who share a common passion for knowledge and development.
                            </p>
                            <div className="flex flex-wrap -mx-3  mb-[30px]">
                                <div className="w-full md:w-1/3 px-3">
                                    <div className="bg-[#ffffff] bg-r text-center py-10 px-3">
                                        <h5 className="fn leading-7 fw-r text-[52px] mb-[22px] text-[#321841]">54</h5>
                                        <p className="fn leading-6 fw-r text-[22px] mb-[0px] text-[#321841]">
                                            Learners
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3">
                                    <div className="bg-[#ffffff] bg-r text-center py-10 px-3">
                                        <h5 className="fn leading-7 fw-r text-[52px] mb-[22px] text-[#321841]">54</h5>
                                        <p className="fn leading-6 fw-r text-[22px] mb-[0px] text-[#321841]">
                                            Average
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3  mb-[0px]">
                                <div className="w-full md:w-1/3 px-3">
                                    <div className="bg-[#ffffff] bg-r text-center py-10 px-3">
                                        <h5 className="fn leading-7 fw-r text-[52px] mb-[22px] text-[#321841]">54</h5>
                                        <p className="fn leading-6 fw-r text-[22px] mb-[0px] text-[#321841]">
                                            Engagements
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3">
                                    <div className="bg-[#ffffff] bg-r text-center py-10 px-3">
                                        <h5 className="fn leading-7 fw-r text-[52px] mb-[22px] text-[#321841]">54</h5>
                                        <p className="fn leading-6 fw-r text-[22px] mb-[0px] text-[#321841]">
                                            Time spent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex justify-end items-center ">
                            <img src={CommunityIcon} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>  
        </>
    )
}
