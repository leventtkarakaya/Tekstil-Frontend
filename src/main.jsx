import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App i18nIsDynamicList={i18n.isDynamicList} />
    </BrowserRouter>
  </StrictMode>
);
