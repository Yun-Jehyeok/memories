import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";

const Pagenation = () => {
  return (
    <div
      className="fixed-bottom"
      style={{
        width: "97%",
        height: "14vh",
        background: "transparent",
      }}
    >
      <Container className="nav_list float-end" style={{ margin: "5px" }}>
        {/* <a href="#">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "#E0E0E0", fontSize: "1.1em", margin: "2px" }}
          />
        </a> */}
        <a href="#history_area">
          <FontAwesomeIcon
            icon={faCircle}
            className="active"
          />
        </a>
        {/* <a href="#">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "#E0E0E0", fontSize: "1.1em", margin: "2px" }}
          />
        </a> */}
        <a href="#involved_area">
          <FontAwesomeIcon
            icon={faCircle}
          />
        </a>
      </Container>
    </div>
  );
};

export default Pagenation;
