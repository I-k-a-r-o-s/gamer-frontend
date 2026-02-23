import { createContext} from "react";
import AuthApi from "../api/AuthApi";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const auth = {};
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;