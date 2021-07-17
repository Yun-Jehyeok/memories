import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Bar } from "./styles";
import { Logo } from "../../assets/commonStyle/styles";

const Header = () => {
  return (
    <Navbar
      className="fixed-top"
    >
      <Bar>
        <Logo />
        <FontAwesomeIcon
          icon={faBars}
          style={{
            color: "#FFFFFF",
            fontSize: "2em",
            float: "right",
            margin: "30px",
            cursor: "pointer",
          }}
        />
      </Bar>
    </Navbar>
  );
};

export default Header;
