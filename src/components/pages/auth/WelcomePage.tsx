import { Paragraph } from "components";
import { useWelcomeFlow } from "modules/auth";


export function WelcomePage() {

    useWelcomeFlow();

    return (
        <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
            <h1 className="text-purple-900 font-semibold text-3xl text-center sm:text-nowrap">
                Congrats! Welcome to Wisdocity. <br />
                Let's get started with your new account
            </h1>
            <Paragraph className="max-w-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Paragraph>
        </div>
    )
}