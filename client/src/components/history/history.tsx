import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import { Page, Year, Text, Redtext, Info } from "./styles";
import { Motion, spring } from "react-motion";

const History = () => {
  const [count, setCount] = useState<number>(50);
  const onCountUp = () => {
    setCount(count + 1);
  }
  const onCountDown = () => {
    setCount(count - 1);
  }

  return (
    <>
      <Page>
        <div className="row" style={{ height: "120vh", margin: "0" }}>
          <Year className="col align-self-center">
            <button type="button" onClick={onCountUp}>
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ color: "#FF0000", fontSize: "2em" }}
              />
            </button>
            <Motion defaultStyle={{ x: 0.1 }} style={{ x: spring(1) }}>
              {(style) => (
                <Text
                  style={{ opacity: `${style.x}`, transitionDuration: "0.2s" }}
                >
                  19
                  <Redtext>{count}</Redtext>
                </Text>
              )}
            </Motion>
            <button onClick={onCountDown}>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#FF0000", fontSize: "2em" }}
              />
            </button>
          </Year>
          <Info className="col align-self-center">
            <Row>
              <Col style={{ textAlign: "left", fontSize: "1.3rem" }}>
                6월 25일 &nbsp;&nbsp;&nbsp;북한군 전면 남침
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "left", fontSize: "1.3rem" }}>
                6월 28일 &nbsp;&nbsp;&nbsp;북한군 서울 점령
              </Col>
            </Row>
          </Info>
        </div>
      </Page>
    </>
  );
};

export default History;
