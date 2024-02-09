import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "modules/routing";

const SPLASH_DURATION_IN_SECONDS = 5;


export const useWelcomeFlow = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => navigate(Routes.Verification), SPLASH_DURATION_IN_SECONDS * 1000);
    }, []);
}