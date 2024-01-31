import { HomeBanner } from "./HomeComponents/HomeBanner";
import { HomeTestimonials } from "./HomeComponents/HomeTestimonials";
import { HomeAvatars } from "./HomeComponents/HomeAvatars";
import { HomeCommunity } from "./HomeComponents/HomeCommunity";
import { HomeExclusiveCommunity } from "./HomeComponents/HomeExclusiveCommunity";
import { HomeLearnerSteps } from "./HomeComponents/HomeLearnerSteps";

import './home.css'


import { HomeAdvantage } from "./HomeComponents/HomeAdvantage";


export function HomePage() {
    return (
        <>
            <HomeBanner />
        {/* <HomeTestimonials /> */}
            <HomeAvatars />
            <HomeCommunity />
            <HomeExclusiveCommunity />
            <HomeLearnerSteps />
            <HomeAdvantage />
        </>
    );
}
