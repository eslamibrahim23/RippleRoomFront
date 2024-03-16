/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="868356852934-a688vgn0gnpm6d2u8ft5qrih86rc8e5f.apps.googleusercontent.com"> */}
      <App />
    {/* </GoogleOAuthProvider> */}
    ;
  </React.StrictMode>
);
