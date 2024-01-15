import { useState } from "react";
import { PrimaryButton } from "../../PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../modules/routing/types";

enum JoinUsOptions {
    Learner = 'learner',
    Expert = 'expert',
}

const optionToRouteMap: { [key in JoinUsOptions]: Routes } = {
    [JoinUsOptions.Learner]: Routes.SignUpLearner,
    [JoinUsOptions.Expert]: Routes.SignUpExpert,
}

const optionToTextMap: { [key in JoinUsOptions]: string } = {
    [JoinUsOptions.Learner]: "Join as a learner",
    [JoinUsOptions.Expert]: "Join as an expert",
}

export function JoinUsPage() {

    const [selection, setSelection] = useState<JoinUsOptions>(JoinUsOptions.Learner);

    const navigate = useNavigate()

    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px] my-8">
            <div className="text-gray-400 text-center">Let's create an account</div>
            <div className="px-6 py-6 sm:px-6">
                <div className="flex flex-col sm:flex-row gap-y-6 justify-between mb-8">
                    {
                        Object.keys(optionToRouteMap).map((optionKey) => (
                            <div
                                key={optionKey}
                                onClick={() => setSelection(optionKey as JoinUsOptions)}
                                className={
                                    "text-center text-nowrap text-$color p-8 rounded-2xl border border-$color cursor-pointer"
                                        .replaceAll("$color", selection === optionKey ? 'indigo-900' : 'gray-400')
                                }
                            >
                                {optionToTextMap[optionKey as JoinUsOptions]}
                            </div>
                        ))
                    }
                </div>
                <PrimaryButton text="Create Account" onClick={() => navigate(optionToRouteMap[selection])} />
            </div>
        </div>
    )
}