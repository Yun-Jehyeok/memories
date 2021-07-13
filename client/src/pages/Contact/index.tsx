import React from "react";
import { Container, Header, Item, Wrap } from "./style";

const Contact = () => {
  return (
    <Wrap>
      <Container>
        <Header>
          <span style={{ color: "red" }}>C</span>ONTACT
        </Header>
        <div id="item-box">
          <Item>EMAIL</Item>
          <Item>GITHUB</Item>
          <Item>KAKAO TALK</Item>
        </div>
      </Container>
    </Wrap>
  );
};

export default Contact;
