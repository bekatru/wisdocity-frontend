import BannerImg from "../../../../assets/learner-assets/learner-banner.png";
import BackgroundBg from "../../../../assets/learner-assets/bg-background.png";

export function LearnersBanner() {
  return (
    <>
      <div className="bg-banner sm:py-12 py-10 flex items-center justify-center relative min-h-[667px]">
        <div className="w-full">
          <div className="w-full flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/1 px-4 mb-[20px] flex items-center justify-center">
              <img src={BackgroundBg} alt="" />
            </div>
          </div>

          <div className="absolute top-10 z-10 top-0 left-0 w-full">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-0 mb-[0px] flex items-center justify-center"></div>
              <div className="w-full md:w-1/2 px-0 mb-[0px]">
                <div className="flex justify-end items-center avatar-header mb-[15px]">
                  <img className="" src={BannerImg} alt="Banner Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute z-20 w-full top-0 h-full">
            <div className="mx-auto max-w-7xl container px-6 lg:px-8 h-full">
              <div className="flex flex-wrap avatar_cards h-full">
                <div className="w-full md:w-1/2 px-0 mb-[0px] flex items-center justify-center">
                  <div className="flex flex-col justify-center">
                    <h1 className="ft leading-none text-[64px] mb-[32px] text-[#321841]">
                      Unleash Your <br />
                      Potential with <br />
                      Experts Wisdom{" "}
                    </h1>
                    <p className="mb-3 font-normal fn fw-r text-[18px] mb-[56px] text-[#321841]">
                      Welcome, curious minds! At Wisdocity, we believe in the
                      transformative power of wisdom. Our intuitive platform is
                      designed with you in mind, offering a unique opportunity
                      to connect with industry experts and embark on a journey
                      of continuous learning.
                    </p>
                    <div className="flex justify-start">
                      <button
                        type="button"
                        className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-10 py-3 text-center text-[16px]"
                      >
                        Join as a learner
                      </button>
                      <button
                        type="button"
                        className="bg-none text-[#8726B9] border-[#8726B9] border fn fw-sb fw-r rounded-full px-10 py-3 text-center text-[16px] ml-4"
                      >
                        Meet our Experts
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-0 mb-[0px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
