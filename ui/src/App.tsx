import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home } from "./components";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Home />
    </Router>
    </>
  );
}

export default App;
