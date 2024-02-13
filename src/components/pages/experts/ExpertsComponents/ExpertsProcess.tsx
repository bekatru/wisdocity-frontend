import ProcessIcon from "../../../../assets/experts-assets/process-icon.png";

export function ExpertsProcess() {
    return (
        <>
            <div className="bg-none py-20 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="flex flex-wrap -mx-4 avatar_cards">

                        <div className="w-full md:w-1/2 px-4">
                            <div className="flex flex-col justify-center">
                                
                                <ul className="list-none flex flex-col justify-start fn fw-b text-[20px] mb-[30px] text-[#321841]">
                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">01</span>
                                        <span className="ml-5">Define expertise areas based on topic, geography, or community.</span>
                                    </li>

                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">02</span>
                                        <span className="ml-5">Reach out to experts known for their knowledge and experience in these fields.</span>
                                    </li>

                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">03</span>
                                        <span className="ml-5">Solicit user and community recommendations for expert nominations.</span>
                                    </li>

                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">04</span>
                                        <span className="ml-5">Assess experts against specific criteria to validate their expertise.</span>
                                    </li>

                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">05</span>
                                        <span className="ml-5">Continuously review experts' performance, contributions, and ratings for ongoing eligibility and active community engagement.</span>
                                    </li>

                                    <li className="flex items-center mb-[30px] bg-[#F6E3FF] rounded-[32px] py-6 px-6 drop-shadow-[0_0px_9px_rgba(100,16,143,0.21)]">
                                        <span className="w-[50px] h-[50px] text-center leading-[46px] flex-shrink-0 text-[#64108F] border-[2px] rounded-full border-[#64108F] text-[22px] fn fw-sb">06</span>
                                        <span className="ml-5">Regularly update the expert list, adding highly qualified individuals and removing those no longer active or relevant as needed.</span>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4  mb-[20px]">
                            <div className="w-full px-0 text-left h-full pl-12">
                                <h4 className="ft leading-tight text-[64px] mb-[34px] text-[#321841]">Our Expert <br />Selection Process</h4>
                                <p className="fn fw-r text-[18px] mb-[42px] text-[#321841]">
                                    We meticulously curate our expert team through a multi-step process ensuring expertise, community engagement, and continuous evaluation.
                                </p>

                                <div className="flex justify-start items-center ">
                                    <img className="w-full" src={ProcessIcon} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
