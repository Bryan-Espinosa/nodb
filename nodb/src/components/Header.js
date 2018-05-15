import React from "react";
import "./Header.css";
import Image from "./Image";
const Header = () => (
  <div className="imageBack">
    <div className="image2">
      {" "}
      <Image />{" "}
    </div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png"
      alt="image not found"
    />
  </div>
);
export default Header;
