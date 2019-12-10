//Main header with 2 dropdowns
import React, { useEffect, useState } from "react";
//? Redux Imports
import { connect } from "react-redux";
import { checkSession } from "../../ducks/reducers/userReducer";

const Header = props => {
  //? Checks Session on mount to see if user is logged in
  useEffect(() => {
    props.checkSession();
  }, []);

  //? Login hands user off to AUTH0 in the index.js
  const userLogin = () => {
    window.location.href = "http://localhost:3069/api/login";
  };

  console.log(props.ducks);

  //? Ternary to show the user logged in or the guest
  if (props.ducks.userReducer.loggedIn) {
    return <h1>{props.ducks.userReducer.user.username}</h1>;
  } else {
    return (
      <h1>
        <button onClick={userLogin}>Login</button>
      </h1>
    );
  }
};

const mapReduxToProps = ducks => {
  return {
    ducks
  };
};

export default connect(mapReduxToProps, { checkSession })(Header);
