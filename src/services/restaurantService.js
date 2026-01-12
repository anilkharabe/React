import axiosInstance from "../utils/axiosInstance";

export const createRestaurant = payload => {
  return axiosInstance.post("/restaurants", payload);
};
