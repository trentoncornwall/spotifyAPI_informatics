import React, { Component } from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
// import "react-spotify-auth/dist/index.css";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  getUserInfo = (token) => {
    fetch("https://api.spotify.com/v1/me", {
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

  receivedToken = (token) => {
    console.log(token);
    this.setState({
      token: token,
    });
    this.getUserInfo(token);
  };

  render() {
    return (
      <>
        <h2>Spotify OAuth</h2>
        {this.state.token ? (
          console.log("welcome, token: ", this.state.token)
        ) : (
          <SpotifyAuth
            redirectUri="http://localhost:3000/callback"
            clientID=""
            scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
            onAccessToken={this.receivedToken}
          />
        )}
      </>
    );
  }
}
