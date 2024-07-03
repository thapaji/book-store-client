import { toast } from "react-toastify";
import { fetchSelectedUserInfo, fetchUserInfo, fetchUsers, loginUser } from "./userAxios";
import { setSelectedUser, setUser, setUsers } from "./userSlice";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    // console.log(status, user);

    /***** update store ****/
    dispatch(setUser(user))
}

export const getSelectedUserObj = (_id) => async (dispatch) => {
    const { status, user } = await fetchSelectedUserInfo(_id);

    dispatch(setSelectedUser(user))
}

export const login = async (dispatch, login) => {
    const pending = loginUser(login);
    toast.promise(pending, { pending: 'Please Wait...' })
    const { status, message, tokens } = await pending;
    toast[status](message);
    toast.info('Setting up your environmenet. please wait...')
    try {
        sessionStorage.setItem("accessJWT", tokens.accessJWT);
        localStorage.setItem("refreshJWT", tokens.refreshJWT);
        if (status === "success") {
            dispatch(getUserObj());
        }

    } catch (error) {
        toast.error('Something went wrong please contact administrator.')
    }

    return
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