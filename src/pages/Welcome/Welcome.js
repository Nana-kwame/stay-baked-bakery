import React, { Component } from "react";
import logo from "./../../assets/logo.jpg";
import { Button } from "../../components";
import ReactAnime from "react-animejs";
import "./Welcome.scss";

const { Anime, stagger } = ReactAnime;

class Welcome extends React.Component {
  routeToLogin = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="welcome">
        <div className="welcome__content">
          <img src={logo} className="welcome__content--logo" />

          <div className="welcome__content--main">
            <Anime
              initial={[
                {
                  targets: "#header",
                  opacity: [0, 1],
                  easing: "easeOutExpo",
                  duration: 2250,
                  delay: 1000,
                },
                {
                  targets: ".header .word",
                  opacity: [0, 1],
                  easing: "easeInOutQuad",
                  duration: 2250,
                  delay: (el, i) => 150 * (i + 1),
                },
              ]}
            >
              <h1 id="header" className="welcome__content--main__h1">
                <span className="word"> Welcome </span>{" "}
                <span className="word">to </span>{" "}
                <span className="word">the </span>{" "}
                <span className="word">SBB </span>{" "}
                <span className="word">baby </span> , Let all your cares melt
                away with our devilishly delicious treats 😉
              </h1>
            </Anime>

            <div className="welcome__content--btnGroup">
              <Button
                onclick={this.routeToLogin}
                style={{
                  height: "50px",
                  width: "239px",
                }}
                text="Join The Party"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
