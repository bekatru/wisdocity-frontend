import { useWelcomeFlow } from "modules/auth";


export function WelcomePage() {

    useWelcomeFlow();

    return (
        <div className="px-4 py-5 sm:p-6 flex flex-col items-center">
            <h1 className="text-purple-900 font-semibold text-3xl text-center sm:text-nowrap mb-6">
                You're almost there!
            </h1>
            <p className="text-purple-900 font-semibold text-3xl text-center max-w-[530px] mt-0">
                Just verify your email to unlock the full experience.
            </p>
        </div>
    )
}