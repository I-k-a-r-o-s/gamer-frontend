import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const auth = { navigate };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
