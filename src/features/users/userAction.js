import { toast } from "react-toastify";
import { fetchUserInfo, fetchUsers, loginUser } from "./userAxios";
import { setUser, setUsers } from "./userSlice";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    // console.log(status, user);

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

export const autoLogin = () => async (dispatch) => {
    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");
    /********** When access JWt Exists ************/
    if (accessJWT) {
        dispatch(getUserObj());
        return;
    }
    /********** When accessJWT do not exist but refreshJWt Exists ************/
    if (refreshJWT) {
        const token = await renewAccessJWT();
        token && dispatch(getUserObj())
    }
}

export const fetchUsersAction = (role) => async (dispatch) => {
    const { status, users } = await fetchUsers(role);
    if (status === "success") {
        dispatch(setUsers(users));
    }
}