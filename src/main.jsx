import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // ✅ Use HashRouter instead of BrowserRouter
import App from "./App";
import "./index.css";  // ✅ Ensure this file exists in `src/`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>  {/* ✅ HashRouter fixes GitHub Pages 404 issue */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
