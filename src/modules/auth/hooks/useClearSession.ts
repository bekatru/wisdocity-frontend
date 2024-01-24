import { useQueryClient } from "@tanstack/react-query";

import { useAuthTokens, useLogout } from ".";


const useClearSession = () => {
  const queryClient = useQueryClient();

  const { removeTokens } = useAuthTokens();

  const { mutateAsync: mutateLogoutAsync } = useLogout();

  return async () => {
    await mutateLogoutAsync({});
    queryClient.clear();
    removeTokens();
  };
};

export default useClearSession;
