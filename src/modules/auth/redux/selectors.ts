import { RootState } from "../../redux/store";

export default {
    selectAuthState: (state: RootState) => state.auth.isAuthenticated
}