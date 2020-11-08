import React, { Component } from "react";
import "./styles.css"
import Me from "./Me";
import Track from "./Track"
import spotify from "../../util/spotify";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token:null,
      userInfo: null,
      topTracks: [],
    };
  }

 
  componentDidMount() {
    // gets the user data & top tracks 
    spotify.getUserInfo(this.props.token)
    .then(userData => 
      spotify.getTopTracks(this.props.token, 'tracks')
      .then(tracks => { 
        this.setState({token: this.props.token, userInfo: userData, topTracks: tracks.items})
        }
        )
    )
  }

  render() {
    return (
      <div className="profile">
        {this.state.userInfo ? <Me userInfo={this.state.userInfo} /> : <p>Loading...</p>}
        {this.state.token ? this.state.topTracks.map(track => <Track key={track.id} token={this.state.token} track={track}/>) : ''}
      </div>
    );
  }
}
