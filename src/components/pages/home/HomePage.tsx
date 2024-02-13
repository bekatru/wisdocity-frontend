import { HomeBanner } from "./HomeComponents/HomeBanner";
import { HomeAvatars } from "./HomeComponents/HomeAvatars";
import { HomeCommunity } from "./HomeComponents/HomeCommunity";
import { HomeExclusiveCommunity } from "./HomeComponents/HomeExclusiveCommunity";
import { HomeLearnerSteps } from "./HomeComponents/HomeLearnerSteps";

import './home.css'


import { HomeAdvantage } from "./HomeComponents/HomeAdvantage";
import { Testimonials } from "./Testimonials";


export function HomePage() {
    return (
        <>
            <HomeBanner />
            <Testimonials/>
            <HomeAvatars />
            <HomeCommunity />
            <HomeExclusiveCommunity />
            <HomeLearnerSteps />
            <HomeAdvantage />
        </>
    );
}
