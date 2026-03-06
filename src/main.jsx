import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import SeoSite from "./Components/seo-site/SeoSite.jsx";
import "./index.css";
// import './app.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/seo-site" element={<SeoSite />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
