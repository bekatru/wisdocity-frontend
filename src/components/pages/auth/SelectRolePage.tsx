import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
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
        <AuthPageLayout headerText="Join us as a learner or expert" footerText="Already have an account?" footerCtaText="Sign in" onFooterCtaClick={navigateToSignInPage}>
            <AuthFormLayout submitButtonText="Create Account" onSubmit={handleSubmit}>
                <div className="flex justify-evenly sm:flex-row mb-8">
                    <div
                        onClick={() => setSelectedOption(SignUpOptions.Learner)}
                        className={cn(
                            "relative text-center text-nowrap text-gray-400 p-8 rounded-2xl border border-gray-400 cursor-pointer",
                            { "border-purple-600 bg-gray-100 text-purple-600": selectedOption === SignUpOptions.Learner }
                        )}
                    >
                        <Checkbox readOnly checked={selectedOption === SignUpOptions.Learner} className="absolute top-2 right-2 rounded" />
                        Join as a learner
                    </div>
                    <div
                        onClick={() => setSelectedOption(SignUpOptions.Expert)}
                        className={cn(
                            "relative text-center text-nowrap text-gray-400 p-8 rounded-2xl border border-gray-400 cursor-pointer",
                            { "border-purple-600 bg-gray-100 text-purple-600": selectedOption === SignUpOptions.Expert }
                        )
                        }
                    >
                        <Checkbox readOnly checked={selectedOption === SignUpOptions.Expert} className="absolute top-2 right-2" />
                        Join as an expert
                    </div>
                </div>
            </AuthFormLayout>
        </AuthPageLayout>
    )
}
