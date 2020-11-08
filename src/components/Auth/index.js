import React from "react";
import { SpotifyAuth } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";

export default function Auth({ receivedToken }) {
  return (
    <SpotifyAuth
      redirectUri="http://localhost:3000/"
      clientID=""
      scopes={['user-read-email', 'user-read-private', 'user-top-read', 'user-read-recently-played']}
      onAccessToken={receivedToken}
    />
  );
}
