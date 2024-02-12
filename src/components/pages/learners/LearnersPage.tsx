import { LearnersBanner } from "./LearnersComponents/LearnersBanner";
import { LearnersTopRated } from "./LearnersComponents/LearnersTopRated";
import { LearnersPeoples } from "./LearnersComponents/LearnersPeoples";
import './style.css'


export function LearnersPage() {
    return (
        <>
            <LearnersBanner />
            <LearnersTopRated />
            <LearnersPeoples />
        </>
    );
}
