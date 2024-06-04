import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEp = rootAPI + "/users";

export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  const headers = {
    Authorization: isPrivate ? getAccessJWT() : null,
  }
  try {
    const response = await axios({ method, url, data, headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
}

const getAccessJWT = () => {
  return sessionStorage.getItem('accessJWT');
}

export const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({ method: 'GET', url: userEp, isPrivate: true, isRefreshJWT: true });
}