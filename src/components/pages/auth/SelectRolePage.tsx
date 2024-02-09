import { RoleSelectionElement } from "components";
import { AuthFormLayout, AuthPageLayout } from "./layouts";
import { Roles, useRoleSelectionFlow } from "modules/auth";

export function SelectRolePage() {

    const flow = useRoleSelectionFlow();

    return (
        <AuthPageLayout
            headerText="Join us as a learner or expert"
            footerText="Already have an account?"
            footerCtaText="Sign in"
            onFooterCtaClick={flow.navigateToSignInPage}>

                <AuthFormLayout
                    submitButtonText="Create Account"
                    onSubmit={flow.handleSubmit}>

                        <div className="flex justify-evenly flex-col space-y-2 sm:space-y-0 sm:flex-row mb-6">

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
