import { LearnersBanner } from "./LearnersComponents/LearnersBanner";
import { LearnersTopRated } from "./LearnersComponents/LearnersTopRated";
import { LearnersPeoples } from "./LearnersComponents/LearnersPeoples";
import { JoinWisdocity } from "./LearnersComponents/JoinWisdocity";
import './style.css'


export function LearnersPage() {
    return (
        <>
            <LearnersBanner />
            <LearnersTopRated />
            <LearnersPeoples />
            <JoinWisdocity />
        </>
    );
}
