import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";

export default function Auth({ receivedToken }) {
  return (
    <SpotifyAuth
      redirectUri="http://localhost:3000/"
      clientID=""
      scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
      onAccessToken={receivedToken}
    />
  );
}
