import { useQueryClient } from "@tanstack/react-query";

import { useAuthTokens, useSignOut } from ".";


const useClearSession = () => {
  const queryClient = useQueryClient();

  const { removeTokens } = useAuthTokens();

  const { mutateAsync: mutateLogoutAsync } = useSignOut();

  return async () => {
    await mutateLogoutAsync({});
    queryClient.clear();
    removeTokens();
  };
};

export default useClearSession;
