import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Roles } from "../../types";
import { Routes } from "modules/routing";

export const useRoleSelectionFlow = () => {
    const [selectedOption, setSelectedOption] = useState<Roles>(Roles.Learner);

    const navigate = useNavigate()

    const navigateToSignInPage = () => navigate(Routes.SignIn)

    const handleSubmit = () => {
        switch (selectedOption) {
            case Roles.Learner: navigate(selectedOption); break;
            case Roles.Expert: navigate(selectedOption); break;
        }
    }

    return {
        selectedOption,
        setSelectedOption,
        navigateToSignInPage,
        handleSubmit,
    }
}