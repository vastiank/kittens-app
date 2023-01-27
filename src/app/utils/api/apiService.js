import { axiosInstance } from "./axios-config";

//Get Kittens
export const getKittens = async () => axiosInstance.get("kittens");
