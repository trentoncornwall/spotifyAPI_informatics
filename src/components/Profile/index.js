import React, { Component } from "react";
import Me from "./Me";
import spotify from "../../util/spotify";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      userInfo: null,
    };
  }

  // getSpotyifyTest = (token) => {
  //   fetch("https://api.spotify.com/v1/me/tracks", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  componentDidMount() {
    this.setState(
      {
        token: this.props.token,
      },
      () => {
        spotify.getUserInfo(this.state.token).then((data) => {
          console.log("after the promise ", data);
        });
      }
    );
  }

  render() {
    return (
      <>{this.state.userInfo ? <Me userInfo={this.state.userInfo} /> : null}</>
    );
  }
}
