import { createContext } from "react";
import RawgApi from "../api/RawgApi";

export const GamerContext = createContext();

const GamerContextProvider = ({ children }) => {
  const game = {};
  return <GamerContext.Provider value={game}>{children}</GamerContext.Provider>;
};

export default GamerContextProvider;
