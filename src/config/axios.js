import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://localhost:9000",
});
axiosRequest.defaults.timeout = 2500;
