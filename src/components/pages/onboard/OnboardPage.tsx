import { useParams } from "react-router-dom";
import { OnboardPageLayout } from "./layouts";
import { useMemo } from "react";
import { GoalsForm, PurposeForm, TopicsForm, WayToLearnForm } from "./forms/learner";

export function OnboardPage() {

    const { step } = useParams();

    const renderForm = useMemo(() => {
        switch (step) {
            case "1":
                return <PurposeForm />
            case "2":
                return <TopicsForm />
            case "3":
                return <WayToLearnForm />
            case "4":
                return <GoalsForm />
            default:
                return null
        }
    }, [step])



    return (
        <OnboardPageLayout>
            {renderForm}
        </OnboardPageLayout>
    )
}