import "./index.css";
import React, { Component } from "react";

import NavBar from "./components/navbar/index.js";
import Hero from "./components/hero/index.js";
import Courses from "./components/feature-boxes";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="px-10 py-5 lg:px-40 lg:py-10">
        <NavBar></NavBar>
        <Hero></Hero>
        <Courses></Courses>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
