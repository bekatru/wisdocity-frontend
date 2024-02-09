import { useProfile, useResendVerification } from "modules/auth";
import { Routes } from "modules/routing";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useVerificationFlow = () => {
    const navigate = useNavigate();

    const profile = useProfile()

    const handleSendVerificationSuccess = () => {
        toast.success("Verification link sent");
    }

    const handleSendVerificationError = () => {
        toast.error("Sending verification link failed");
    }

    const verification = useResendVerification({
        onSuccess: handleSendVerificationSuccess,
        onError: handleSendVerificationError,
    })

    const navigateToChangeEmailPage = () => {
        navigate(Routes.ChangeEmail)
    }

    const resendVerification = () => {
        verification.mutate({});
    }

    useEffect(() => {
        if (profile.data?.is_verified) {
            navigate(Routes.App);
        }
    }, [profile.data?.is_verified])

    return {
        resendVerification,
        navigateToChangeEmailPage,
        isPending: verification.isPending,
        verificationEmail: profile.data?.email,
    }
}