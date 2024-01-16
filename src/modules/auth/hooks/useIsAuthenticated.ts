import { useAuthTokens } from "./index";

const useIsAuthenticated = () => {
  const { accessToken } = useAuthTokens();

  return !!accessToken;
};

export default useIsAuthenticated;
