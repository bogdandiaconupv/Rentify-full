import { useState } from "react";
import Navigator from "./Components/Navigator";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Steps from "./Components/Steps";
import Security from "./Components/Security";
import Demo from "./Components/Demo";
import "./App.css";
import LoginCard from "./Components/Cards/LoginCard";


export default function Home() {
  

  return (
    <>
      <Header/>
      <Main />
      <Steps />
      <Security />
      <Demo />
      <Footer />
      <Navigator />
      
    </>
  );
}
