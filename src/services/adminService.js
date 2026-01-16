import axiosInstance from "../utils/axiosInstance";

export const fetchAdminStats = () => {
  return axiosInstance.get("/admin/stats");
};
