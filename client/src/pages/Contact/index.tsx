import React from "react";
import { Logo, OutLink } from "@assets/commonStyle/styles";
import { Container, Header, Item, Wrap } from "./styles";

const Contact = () => {
  return (
    <Wrap>
      <Logo />
      <Container>
        <Header>
          <span style={{ color: "red" }}>C</span>ONTACT
        </Header>
        <div id="item-box">
          <Item>
            <OutLink href="#">EMAIL</OutLink>
          </Item>
          <Item>
            <OutLink href="http://github.com/Yun-Jehyeok">GITHUB</OutLink>
          </Item>
          <Item>
            <OutLink href="https://open.kakao.com/o/siDcC6nd">
              KAKAO TALK
            </OutLink>
          </Item>
        </div>
      </Container>
    </Wrap>
  );
};

export default Contact;
