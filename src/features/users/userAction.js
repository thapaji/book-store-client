import { toast } from "react-toastify";
import { fetchUserInfo, loginUser } from "./userAxios";
import { setUser } from "./userSlice";

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    console.log(status, user);

    /***** update store ****/
    dispatch(setUser(user))
}

export const login = async (dispatch, login) => {
    const pending = loginUser(login);
    toast.promise(pending, { pending: 'Please Wait...' })
    const { status, message, tokens } = await pending;
    toast[status](message);
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
    if (status === "success") {
        dispatch(getUserObj());
    }
    return status;
}