import { useNavigate } from "react-router-dom";
import useAuthTokens from "../useAuthTokens";
import useLogin from "../useLogin";
import { toast } from "react-toastify";
import { SignInPayload, SignInResponse } from "../../api";
import { Routes } from "modules/routing";
import { ApiError, ApiServiceError } from "libs/axios";

export const useLoginFlow = () => {

    const navigate = useNavigate();

    const authTokens = useAuthTokens();

    const handleLoginSuccess = (response: SignInResponse) => {
        authTokens.setTokens(response.access_token, response.refresh_token);
        toast.success("Signed in successfuly")
        navigate(Routes.App);
    }

    const handleLoginError = (error: ApiServiceError<ApiError>) => {
        toast.error(error.response?.data.message);
    }

    const login = useLogin({
        onSuccess: handleLoginSuccess,
        onError: handleLoginError,
    })

    const submitForm = (data: SignInPayload) => {
        login.mutate({
            email: data.email,
            password: data.password,
        })
    }

    return {
        isPending: login.isPending,
        submitForm: submitForm
    }
}
