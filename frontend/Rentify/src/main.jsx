import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigator from "./Components/Navigator";
import Tester from "./Components/Cards/Tester";
import LoginCard from "./Components/Cards/LoginCard";
import RegisterCard from "./Components/Cards/RegisterCard";
import Discover from "./Components/Discover";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/1" element={<Tester />}>
          {" "}
        </Route>
        <Route path="/register" element={<RegisterCard />}>
          {" "}
        </Route>
        <Route path="/login" element={<LoginCard />}>
          {" "}
        </Route>
        <Route path="/discover" element={<Discover />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

//ICON SITE
//https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid

//LOGO SITE
//https://app.logo.com/dashboard/logo_6e0425c2-abc0-430f-959a-e9326506b76b/your-logo-files
