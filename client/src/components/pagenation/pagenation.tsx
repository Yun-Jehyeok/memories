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
      <Container className="float-end" style={{ margin: "5px" }}>
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.1em", margin: "2px" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#3498DA", fontSize: "1.1em", margin: "2px" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.1em", margin: "2px" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.1em", margin: "2px" }}
        />
      </Container>
    </div>
  );
};

export default Pagenation;
