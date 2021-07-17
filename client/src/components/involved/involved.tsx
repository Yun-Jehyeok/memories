import React from "react";
import background from "../../assets/img/involved_page.png";
import { Textpage } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Involved = () => {
  return (
    <div
      className="page_section"
      id="involved_area"
      style={{
        height: "100vh",
        width: "100%"
      }}
    >
      <img
        src={background}
        alt="involved"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        z-index="-1"
      />
      <Textpage>
        <h2>
          <b>참 여 하 기</b>
        </h2>
        <br />
        <p>굿즈를 보고 싶으신가요?</p>
        <p>
          싸인 만물은 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한
          봄바람이다
          <br /> 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는
          얼마나 기쁘며 얼<br />
          마나 아름다우냐? 이것을 얼음 속에서 불러 내는 ....
        </p>
        <p>판매 수익금은 참전 용사분들을 위해 기부됩니다.</p>
        <a href="#">
          <span
            style={{
              fontSize: "20px",
              position: "relative",
              top: "15px",
            }}
          >
            {" "}
            굿즈 구매하기{" "}
          </span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{
              color: "black",
              fontSize: "4em",
              position: "absolute",
            }}
          />
        </a>
      </Textpage>
    </div>
  );
};

export default Involved;
