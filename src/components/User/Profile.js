//user profile page
import React, { useEffect } from "react";
import { checkSession } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

const Profile = props => {
  const { profile_img, username, email } = props.ducks.userReducer.user;
  return (
    <>
      <div style={{ height: "15vh", backgroundColor: "#f5f5f5" }}></div>
      <h1>User Stuff goes here</h1>
      <p>{username}</p>
      <p>{email}</p>
      <Avatar src={profile_img} />
    </>
  );
};

const mapReduxToProps = ducks => {
  return {
    ducks
  };
};

export default connect(mapReduxToProps, { checkSession })(Profile);
