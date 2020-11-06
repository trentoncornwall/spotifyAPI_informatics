import React, { Component } from "react";
import Me from "./Me";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      userInfo: null,
    };
  }

  getSpotyifyTest = (token) => {
    fetch("https://api.spotify.com/v1/me/tracks", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  getUserInfo = (token) => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userInfo: data,
        });
        console.log("Success:", data);
        this.getSpotyifyTest(token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  componentDidMount() {
    this.setState(
      {
        token: this.props.token,
      },
      () => {
        this.getUserInfo(this.state.token);
      }
    );
  }

  render() {
    return (
      <>{this.state.userInfo ? <Me userInfo={this.state.userInfo} /> : null}</>
    );
  }
}
