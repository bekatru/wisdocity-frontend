
import BannerImg from "../../../../assets/home-assets/home-banner.jpg";

export function HomeBanner() {
    return (

        <div className="w-full bg-cover bg-center banner-v1 pt-[120px] relative" style={{ height: '45rem', backgroundImage: `url(${BannerImg})` }}>
            <div className="flex items-start justify-start h-full w-full">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-left">
                        <h1 className="text-white ft text-[64px] mb-[30px]">Bridging Wisdom and <br />Curiosity for Lifelong Learning</h1>
                        <p className="mb-3 font-normal fn  fw-r text-white text-[20px] mb-[46px]">Wisdom and curiosity converge seamlessly here in the heart of the ‘City of Wisdom’. Seasoned
                            professionals generously share their expertise, either live or through the digital avatar, while
                            eager learners from diverse backgrounds gather to explore, question and grow. Whether your
                            goal is to contribute your insights or absorb new perspectives, we invite you to become a part of
                            a lifelong learning journey, fostering mutual enrichment and continious growth.</p>
                        <button type="button" className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-8 py-4 text-center text-[16px]">See Experts</button>
                    </div>
                </div>
            </div>
            <div className="transparent-bg absolute w-full"></div>
        </div>

    )
}