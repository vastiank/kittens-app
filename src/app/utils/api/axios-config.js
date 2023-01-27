import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/", //API REST endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export const responseHandler = (response) => response;
export const errorHandler = async (error) => Promise.reject(error);

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response.data.data),
  (error) => errorHandler(error)
);

export { axiosInstance };
