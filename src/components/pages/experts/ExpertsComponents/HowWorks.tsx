import ProcessIcon from "../../../../assets/experts-assets/how-it-work-process.svg";

export function ExpertsHowWorks() {
    return (
        <>
          <div className="bg-none py-0 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full lg:mx-0 text-left">
                    <h4 className="ft leading-normal text-[64px] mb-[10px] text-[#321841]">How it works</h4>
                    <p className="fn fw-r text-[18px] mb-[60px] text-[#321841]">
                        Easily immortalize your wisdom with simplicity and convenience.
                    </p>

                    <div className="w-full  -mx-6">
                        <img src={ProcessIcon} alt="" />
                    </div>
                </div>
 
                
            </div>
        </div>  
        </>
    )
}
