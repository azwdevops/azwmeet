import API from "../shared/axios";

// get user data
export const getUser = () => API.get("/api/user/get-user-data/");

// GET REQUEST to get meetings by admin
export const getMeetings = (userId) =>
  API.get(`/api/meetings/system-admin/maintain-meetings/${userId}/`);
