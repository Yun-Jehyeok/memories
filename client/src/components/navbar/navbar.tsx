import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Bar } from "./styles";

const Header = () => {
  return (
    <Navbar className="sticky-top">
      <Bar>
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
