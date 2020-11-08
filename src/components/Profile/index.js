import React, { Component } from "react";
import Me from "./Me";
import Track from "./Track"
import spotify from "../../util/spotify";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token:null,
      userInfo: null,
      topTracks: null,
    };
  }
//   topTracks.forEach(track => {
//     spotify.getTrackAnalysis(token, track.id)
//     .then(data =>  trackAnalysis.push({...track, analysis: {...data}}))
//     .catch(error => console.error('Error :', error))
// })
//this.setState({token: this.props.token, userInfo: userData, tracksAnalysis: tracksAnalysis})
  componentDidMount() {
    // gets the user data & top tracks 
    spotify.getUserInfo(this.props.token)
    .then(userData => 
      spotify.getTopTracks(this.props.token, 'tracks')
      .then(tracks =>  this.setState({token: this.props.token, userInfo: userData, topTracks: tracks}))
    )
  }

  render() {
    return (
      <>
      {this.state.userInfo ? <Me userInfo={this.state.userInfo} /> : null}
      {this.state.topTracks ? console.log(this.state.topTracks) : null}
      </>
    );
  }
}
