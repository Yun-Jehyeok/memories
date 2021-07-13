import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";

const Pagenation = () => {
  return (
    <div
      className="fixed-bottom"
      style={{
        width: "100%",
        height: "15vh",
        background: "transparent",
      }}
    >
      <Container className="float-end">
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.2em" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#3498DA", fontSize: "1.2em" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.2em" }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#E0E0E0", fontSize: "1.2em" }}
        />
      </Container>
    </div>
  );
};

export default Pagenation;
