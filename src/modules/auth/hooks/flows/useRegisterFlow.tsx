import { SignUpFields } from "components/pages/auth/forms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthTokens, useRegister } from "..";
import { Routes } from "modules/routing";
import { Roles, SignUpResponse } from "modules/auth";
import { ApiError, ApiServiceError } from "libs/axios";

export const useRegisterFlow = (role: Roles) => {
    
    const navigate = useNavigate();

    const authTokens = useAuthTokens()

    const handleRegisterSuccess = (response: SignUpResponse) => {
        authTokens.setTokens(response.access_token, response.refresh_token);
        toast.success("Signed up successfuly")
        navigate(Routes.Welcome)
    }

    const handleRegisterError = (error: ApiServiceError<ApiError>) => {
        toast.error(error.response?.data.message)
    }

    const register = useRegister({
        onSuccess: handleRegisterSuccess,
        onError: handleRegisterError,
    });

    const submitForm = (data: SignUpFields) => {

        register.mutate({
            username: data.name,
            email: data.email,
            password: data.password,
            country: data.country,
            is_subscribed: data.isSendEmailsChecked,
            current_role: role,
        })
    };

    return {
        isPending: register.isPending,
        submitForm,
    }
}