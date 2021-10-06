import React, { Component } from "react";
import { Card, Input, Button } from "../../components";
import "./Login.scss";

class Login extends Component {
  routeToHome = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="login">
        <Card>
          <div className="login--card">
            <h3 className="login__header">What's the secret code ?</h3>

            <Input placeholder="Pineapple..." />

            <div className="login--card__btn">
              <Button
                onclick={this.routeToHome}
                text="Enter"
                style={{
                  height: "50px",
                  width: "225px",
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
