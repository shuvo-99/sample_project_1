import { UserRequest } from "../types";
import axiosService from "../utils/axiosService";
import axiosUserService from "../utils/axiosUserService";

export const getDragonList = async () => {
  const response = await axiosService({
    url: `/v3/dragons`,
    method: "get",
  });

  return response?.data;
};

export const getRocketList = async () => {
  const response = await axiosService({
    url: `/v3/rockets`,
    method: "get",
  });
  ;
  return response?.data;
};

export const getMissionList = async () => {
  const response = await axiosService({
    url: `/v3/missions`,
    method: "get",
  });
  
  return response?.data;
};

export const createUser = async (data:UserRequest) => {
  try {
    const response = await axiosUserService({
      url: '/api/v1/administration/addUser',
      method: 'post',
      data: data, 
    });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  }
};
