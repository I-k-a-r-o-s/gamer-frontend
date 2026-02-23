import axios from "axios";

const AuthApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
export default AuthApi;
