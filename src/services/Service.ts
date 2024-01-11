import { UserCreationPayload } from "../types";
import axiosPost from "../utils/axiosPost";
import axiosService from "../utils/axiosService";

export const getDragonList = async () => {
  const response = await axiosService({
    url: `/v3/dragons`,
    method: "get",
  });
  console.log(response?.data);
  return response?.data;
};

export const getRocketList = async () => {
  const response = await axiosService({
    url: `/v3/rockets`,
    method: "get",
  });
  console.log(response?.data);
  return response?.data;
};

export const getMissionList = async () => {
  const response = await axiosService({
    url: `/v3/missions`,
    method: "get",
  });
  console.log(response?.data);
  return response?.data;
};

export const postUser = async (userData: UserCreationPayload) => {
  try {
    const response = await axiosPost.post(
      "/api/v1/administration/addUser",
      userData
    );
    console.log("Posted", response?.data);
    return response?.data;
  } catch (error) {
    console.error("Error posting user:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
  // return response?.data;
};
