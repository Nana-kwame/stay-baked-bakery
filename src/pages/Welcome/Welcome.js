import React, { Component } from "react";
import logo from "./../../assets/logo.jpg";
import { Button } from "../../components";
import "./Welcome.scss";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome__content">
          <img src={logo} className="welcome__content--logo" />

          <div className="welcome__content--main">
            <h1 className="welcome__content--main__h1">
              Welcome to the SBB baby, Let all your cares melt away with our
              devilishly delicious treats 😉
            </h1>
            {/* <p className="welcome__content--sub">
              Let all your cares melt away with our devilishly delicious treats
              😈
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
