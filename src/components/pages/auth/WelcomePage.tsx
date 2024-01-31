import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Routes } from "modules/routing";

const SPLASH_DURATION_IN_SECONDS = 5;

export function WelcomePage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate(Routes.Verification), SPLASH_DURATION_IN_SECONDS * 1000);
    }, []);

    return (
        <div className="px-4 py-5 sm:p-6 flex flex-col items-center space-y-8">
            <h1 className="text-purple-900 font-semibold text-3xl text-center sm:text-nowrap">
                Congrats! Welcome to Wisdocity. <br />
                Let's get started with your new account
            </h1>
            <p className="text-gray-400 text-center max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
        </div>
    )
}