const spotify = {
  getUserInfo: (token) => {
    return (
      fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.json())
        .catch(error =>  console.error("Error:", error))
    );
  },

  getTopTracks: (token, type) => {
    return ( 
      fetch(`https://api.spotify.com/v1/me/top/${type}`, {
        headers:  { Authorization: `Bearer ${token}` },
      })
      .then(response => response.json())
      .catch(error =>  console.error("Error:", error))
    )
  },

  getTrackAnalysis: (token, id) => {
    return ( 
      fetch(`https://api.spotify.com/v1/audio-analysis/${id}`, {
        headers:  { Authorization: `Bearer ${token}` },
      })
      .then(response => response.json())
      .catch(error =>  console.error("Error:", error))
    )
  }
};

export default spotify