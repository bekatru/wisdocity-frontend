import BannerImg from "../../../../assets/home-assets/home-banner.jpg";

export function HomeBanner() {
  return (
    <>
      <div
        className="w-full bg-cover bg-center banner-v1 relative"
        style={{ height: "45rem", backgroundImage: `url(${BannerImg})` }}
      >
        <div className="flex items-center justify-center h-full w-full">
          <div className="mx-auto max-w-7xl container px-6 lg:px-8">
            <div className="w-full text-left">
              <h1 className="text-white ft text-[64px] mb-[50px]">
                Where Curiosity <br />
                Meets Wisdom
              </h1>
              <button
                type="button"
                className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-8 py-4 text-center text-[16px]"
              >
                Meet our Experts
              </button>
            </div>
          </div>
        </div>
        <div className="transparent-bg absolute w-full"></div>
      </div>
    </>
  );
}
