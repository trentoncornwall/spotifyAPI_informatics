import React from "react";

export default function Me({ userInfo }) {
  return (
    <>
      <h2>{userInfo.display_name} </h2>
      <h3>{userInfo.email}</h3>
    </>
  );
}
