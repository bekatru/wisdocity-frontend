import { RoleSelectionElement } from "components";
import { AuthFormLayout, AuthPageLayout } from "./layouts";
import { Roles, useRoleSelectionFlow } from "modules/auth";

export function SelectRolePage() {

    const flow = useRoleSelectionFlow();

    return (
        <AuthPageLayout
            headerText={<p>
                Welcome to the “City of Wisdom!”<br/>
                How would you like to begin your journey?
            </p>}
            footerText="Already have an account?"
            footerCtaText="Log in"
            onFooterCtaClick={flow.navigateToSignInPage}>

                <AuthFormLayout
                    submitButtonText="Create Account"
                    onSubmit={flow.handleSubmit}>

                        <div className="flex justify-evenly flex-col space-y-3 sm:space-y-0 sm:flex-row mb-8 mt-10">

                            <RoleSelectionElement
                                role={Roles.Learner}
                                selected={flow.selectedOption === Roles.Learner}
                                onClick={flow.setSelectedOption}/>

                            <RoleSelectionElement
                                role={Roles.Expert}
                                selected={flow.selectedOption === Roles.Expert}
                                onClick={flow.setSelectedOption}/>
                        </div>
                        
                </AuthFormLayout>

        </AuthPageLayout>
    )
}
