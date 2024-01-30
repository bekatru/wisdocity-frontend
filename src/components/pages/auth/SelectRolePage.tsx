import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "modules/routing";
import { Checkbox } from "components";
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
                        className={
                            "relative text-center text-nowrap text-$color p-8 rounded-2xl border border-$color cursor-pointer $bg"
                                .replaceAll("$color", selectedOption === SignUpOptions.Learner ? 'purple-600' : 'gray-400')
                                .replaceAll("$bg", selectedOption === SignUpOptions.Learner ? 'bg-gray-100' : '')
                        }
                    >
                        <Checkbox readOnly checked={selectedOption === SignUpOptions.Learner} className="absolute top-2 right-2 rounded"/>
                        Join as a learner
                    </div>
                    <div
                        onClick={() => setSelectedOption(SignUpOptions.Expert)}
                        className={
                            "relative text-center text-nowrap text-$color p-8 rounded-2xl border border-$color cursor-pointer $bg"
                                .replaceAll("$color", selectedOption === SignUpOptions.Expert ? 'purple-600' : 'gray-400')
                                .replaceAll("$bg", selectedOption === SignUpOptions.Expert ? 'bg-gray-100' : '')
                        }
                    >
                        <Checkbox readOnly checked={selectedOption === SignUpOptions.Expert} className="absolute top-2 right-2"/>
                        Join as an expert
                    </div>
                </div>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}
