import { createContext } from "react";
import { useNavigate } from "react-router";

export const GamerContext = createContext();

const GamerContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const game = { navigate };
  return <GamerContext.Provider value={game}>{children}</GamerContext.Provider>;
};

export default GamerContextProvider;
