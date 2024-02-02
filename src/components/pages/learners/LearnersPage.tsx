import { LearnersBanner } from "./LearnersComponents/LearnersBanner";
import { LearnersTopRated } from "./LearnersComponents/LearnersTopRated";
import './style.css'


export function LearnersPage() {
    return (
        <>
            <LearnersBanner />
            <LearnersTopRated />
        </>
    );
}
