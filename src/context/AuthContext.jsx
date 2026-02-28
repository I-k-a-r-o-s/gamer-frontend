import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const auth = { navigate, loading, setLoading };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
