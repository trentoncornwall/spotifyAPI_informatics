export default {
  getUserInfo: (token) => {
    return (
      fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        //   .then((data) => {
        //     //console.log("Success:", data);
        //     return data;
        //   })
        .catch((error) => {
          return console.error("Error:", error);
        })
    );
  },
};
