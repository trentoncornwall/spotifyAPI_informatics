import React, { Component } from "react";
import "./styles.css"
import Auth from "../Auth";
import Profile from "../Profile";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  receivedToken = (token) => {
    this.setState({
      token: token,
    });
  };

  render() {
    return (
      <main>
        {this.state.token ? (
          <Profile token={this.state.token} />
        ) : (
          <Auth receivedToken={this.receivedToken} />
        )}
      </ main>
    );
  }
}
