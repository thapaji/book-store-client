import { fetchUserInfo } from "./userAxios";
import { setUser } from "./userSlice";

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    console.log(status, user);

    /***** update store ****/
    dispatch(setUser(user))
}