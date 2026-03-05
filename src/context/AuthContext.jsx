import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import AuthApi from "../api/AuthApi";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

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
      return;
    }
    setUser(userData);
  };

  const logout = async () => {
    try {
      const { data } = await AuthApi.post("/api/users/logout");
      if (data.success) {
        setUser(null);
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error in logout!:", error);
      toast.error("Failed to logout");
    }
  };

  const auth = { navigate, loading, setLoading, user, saveUser, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
