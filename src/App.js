import React from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import PromoList from "./components/promobox/PromoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PromoList />
      <Footer />
    </div>
  );
}

export default App;
