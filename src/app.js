import React from "react";
import Home from "./components/home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
