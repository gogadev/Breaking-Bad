import React from "react";

import image from "../../assets/image.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <img src={image} alt="" />
    </header>
  );
};

export default Header;
