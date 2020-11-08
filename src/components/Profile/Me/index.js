import React from "react";
import "./styles.css"

export default function Me({ userInfo }) {
  return (
    <div className="userInfo">
        {console.log('userInfo: ', userInfo)}
      <h2>{userInfo.display_name} </h2>
      <h3>{userInfo.email}</h3>
    </ div>
  );
}
