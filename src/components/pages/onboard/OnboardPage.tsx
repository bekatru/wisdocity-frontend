import { useNavigate, useParams } from "react-router-dom";
import { OnboardPageLayout } from "./layouts";
import { useCallback, useMemo, useState } from "react";
import { GoalsForm, PurposeForm, TopicsForm, WayToLearnForm } from "./forms/learner";
import { MultiSelectOption } from "components";
import { Routes } from "modules/routing/types";

const NUMBER_OF_STEPS = 4;

const PURPOSE_OPTIONS = [
    "Learning",
    "Other",
]

const TOPICS_OPTIONS = [
    "AI",
    "Career",
    "Investment",
    "Psychology",
    "Software Development",
    "Design",
    "Marketing",
    "Managment",
    "Productivuty",
    "Travelling",
    "Writing",
    "Music",
    "Lifestyle"
]

const WAY_TO_LEARN_OPTIONS =  [
    { id: 1, value: 'Listening' },
    { id: 2, value: 'Reading' },
    { id: 3, value: 'Hands-on' },
]

export function OnboardPage() {

    const { step: stepParam } = useParams();
    const navigate = useNavigate();

    const step = useMemo(() => Number(stepParam), [stepParam])
    const isLastStep = useMemo(() => step === NUMBER_OF_STEPS, [step]);

    const [purpose, setPurpose] = useState<string>(PURPOSE_OPTIONS[0]);
    const [topics, setTopics] = useState<string[]>([]);
    const [wayToLearn, setWayToLearn] = useState<MultiSelectOption[]>([])
    const [goals, setGoals] = useState<string[]>([]);

    const navigateToNextStep = useCallback(() => {
        navigate(Routes.OnboardLearner.replace(':step', String(step + 1)))
    }, [step, navigate])

    const finishOnboarding = useCallback(() => {
        console.log({
            purpose,
            topics,
            wayToLearn,
            goals,
        })
    }, [purpose, topics, wayToLearn, goals])

    return (
        <OnboardPageLayout
            numberOfSteps={NUMBER_OF_STEPS}
            step={step}
            primaryButtonText={isLastStep ? "Save" : "Next"}
            secondaryButtonText={"Skip"}
            onPrimaryButtonClick={isLastStep ? finishOnboarding : navigateToNextStep}
            onSecondaryButtonClick={isLastStep ? finishOnboarding : navigateToNextStep}
        >
            {
                step === 1 ? <PurposeForm options={PURPOSE_OPTIONS} value={purpose} onChange={setPurpose} />
                : step === 2 ? <TopicsForm options={TOPICS_OPTIONS} value={topics} onChange={setTopics}/>
                : step === 3 ? <WayToLearnForm options={WAY_TO_LEARN_OPTIONS} value={wayToLearn} onChange={setWayToLearn} />
                : step === 4 ? <GoalsForm value={goals} onChange={setGoals} />
                : null
            }
        </OnboardPageLayout>
    )
}