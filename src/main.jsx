import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GamerContextProvider from "./context/GamerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GamerContextProvider>
      <App />
    </GamerContextProvider>
  </StrictMode>,
);
