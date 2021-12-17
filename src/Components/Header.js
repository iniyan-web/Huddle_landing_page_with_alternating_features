import React from "react";
import headerLogo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <img className="header-logo" src={headerLogo} alt="Home." />
        <button className="btn header-btn">Try It Free</button>
      </header>
    </>
  );
};

export default Header;
