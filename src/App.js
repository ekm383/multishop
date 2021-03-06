import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Faq from "./pages/faq";
import Login from "./pages/login";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/faq" component={Faq} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
