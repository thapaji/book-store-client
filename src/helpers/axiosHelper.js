import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEp = rootAPI + "/users";


export const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
}