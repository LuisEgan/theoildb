import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Routes from "../config/routes";
import Header from "./globals/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Page">
          <Routes />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(App));
