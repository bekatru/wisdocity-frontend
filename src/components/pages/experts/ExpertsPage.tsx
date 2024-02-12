import { ExpertsBanner } from "./ExpertsComponents/ExpertsBanner";
import { ExpertsCommunity } from "./ExpertsComponents/LearnersCommunity";
import { ExpertsProcess } from "./ExpertsComponents/ExpertsProcess";
import { ExpertsHowWorks } from "./ExpertsComponents/HowWorks";
import { WhyChoose } from "./ExpertsComponents/WhyChoose";
import './style.css'


export function ExpertsPage() {
    return (
        <>
            <ExpertsBanner />
            <ExpertsCommunity />
            <ExpertsProcess />
            <ExpertsHowWorks />
            <WhyChoose />
        </>
    );
}
