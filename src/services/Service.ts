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

export const postUser = async () => {
  const response = await axiosService({
    url: `/api/v1/administration/addUser`,
    method: "post",
  });
  console.log(response?.data);
  // return response?.data;
};
