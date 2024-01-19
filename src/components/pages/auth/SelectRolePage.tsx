import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "modules/routing/types";
import { AuthFormLayout, AuthPageLayout } from "./layouts";

enum SignUpOptions {
    Learner = 'learner',
    Expert = 'expert',
}

export function SelectRolePage() {

    const [selectedOption, setSelectedOption] = useState<SignUpOptions>(SignUpOptions.Learner);

    const navigate = useNavigate()

    const navigateToSignInPage = () => navigate(Routes.SignIn)

    const handleSubmit = () => {
        switch (selectedOption) {
            case SignUpOptions.Learner: navigate(selectedOption); break;
            case SignUpOptions.Expert: navigate(selectedOption); break;
        }
    }

    return (
        <AuthPageLayout headerText="Let's create an account" footerText="Already have an account?" footerCtaText="Sign in" onFooterCtaClick={navigateToSignInPage}>
            <AuthFormLayout submitButtonText="Create Account" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-y-6 justify-between mb-8">
                    <div
                        onClick={() => setSelectedOption(SignUpOptions.Learner)}
                        className={"text-center text-nowrap text-$color p-8 rounded-2xl border border-$color cursor-pointer $bg".replaceAll("$color", selectedOption === SignUpOptions.Learner ? 'purple-600' : 'gray-400')}
                    >
                        Join as a learner
                    </div>
                    <div
                        onClick={() => setSelectedOption(SignUpOptions.Expert)}
                        className={"text-center text-nowrap text-$color p-8 rounded-2xl border border-$color cursor-pointer".replaceAll("$color", selectedOption === SignUpOptions.Expert ? 'purple-600' : 'gray-400')}
                    >
                        Join as an expert
                    </div>
                </div>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}
