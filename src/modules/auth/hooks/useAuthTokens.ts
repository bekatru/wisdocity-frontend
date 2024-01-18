import { useCookies } from "react-cookie";
import { COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS, COOKIE_REFRESH_TOKEN_NAME } from "constants";

const useAuthTokens = () => {
  const [cookie, setCookie, removeCookie] = useCookies();

  const setTokens = (accessToken: string, refreshToken: string) => {
    setCookie(COOKIE_ACCESS_TOKEN_NAME, accessToken, COOKIE_OPTIONS);
    setCookie(COOKIE_REFRESH_TOKEN_NAME, refreshToken, COOKIE_OPTIONS);
  };

  const removeTokens = () => {
    removeCookie(COOKIE_ACCESS_TOKEN_NAME, COOKIE_OPTIONS);
    removeCookie(COOKIE_REFRESH_TOKEN_NAME, COOKIE_OPTIONS);
  };

  return {
    accessToken: cookie[COOKIE_ACCESS_TOKEN_NAME],
    refreshToken: cookie[COOKIE_REFRESH_TOKEN_NAME],
    setTokens,
    removeTokens
  };
};

export default useAuthTokens;
