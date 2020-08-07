import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
