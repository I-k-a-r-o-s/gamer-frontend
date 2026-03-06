import axios from "axios";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export const GamerContext = createContext();

const GamerContextProvider = ({ children }) => {
  const AuthApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = localStorage.getItem("user");
    if (loadUser) {
      setUser(JSON.parse(loadUser));
    }
  }, []);

  // Wrapper function to save user to localStorage
  const saveUser = (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
    setUser(userData);
  };

  const logout = async () => {
    try {
      const { data } = await AuthApi.post("/api/users/logout");
      if (data.success) {
        saveUser(null);
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error in logout!:", error);
      toast.error("Failed to logout");
    }
  };

  const auth = {
    AuthApi,
    navigate,
    loading,
    setLoading,
    user,
    saveUser,
    logout,
    location,
  };

  return <GamerContext.Provider value={auth}>{children}</GamerContext.Provider>;
};

export default GamerContextProvider;
