import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Bar } from "./styles";
import logo from "../../assets/img/Logo.png";

const Header = () => {
  return (
    <Navbar className="fixed-top">
      <Bar>
        <img
          src={logo}
          alt="logo"
          style={{
            width:"3.5em",
            marginTop: "15px",
            marginLeft: "15px"
          }}
        />
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
