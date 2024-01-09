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
}