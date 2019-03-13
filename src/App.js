import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Homepage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
