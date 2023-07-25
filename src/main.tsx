import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetCSS } from "./styles/reset";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ResetCSS>
        <App />
      </ResetCSS>
    </RecoilRoot>
  </React.StrictMode>,
);
