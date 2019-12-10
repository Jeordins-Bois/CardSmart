//Main header with 2 dropdowns
import React from "react";

const Header = () => {

  const userLogin = () => {
    window.location.href = "http://localhost:3069/api/login";
  };

  return <h1><button onClick={userLogin}>Login</button></h1>;
};

export default Header;
