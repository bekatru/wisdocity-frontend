// import { AccountClosedSplashPage, SignUpSplashPage, VerifyEmailPage } from "../auth";
// import { UpdateEmailPage } from "../auth/UpdateEmailPage";

import { AccountClosedSplashPage, SignUpSplashPage, UpdateEmailPage, VerifyEmailPage } from "../auth";
import { OnboardPage } from "../onboard/OnboardPage";
import { GoalsForm } from "../onboard/forms/learner/GoalsForm";
import { PurposeForm } from "../onboard/forms/learner/PurposeForm";
import { TopicsForm } from "../onboard/forms/learner/TopicsForm";
import { WayToLearnForm } from "../onboard/forms/learner/WayToLearnForm";
import { OnboardPageLayout } from "../onboard/layouts/OnboardPageLayout";

export function TestPage() {

    return (
        <OnboardPage>
            {/* <PurposeForm/> */}
            {/* <TopicsForm/> */}
            <GoalsForm/>
        </OnboardPage>
    )

    // return <>
    //     <AccountClosedSplashPage/>
    //     <SignUpSplashPage/>
    //     <UpdateEmailPage/>
    //     <VerifyEmailPage/>
    // </>
}



