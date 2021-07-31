import React from 'react';
import { Logo, OutLink } from '../../assets/commonStyle/styles';
import { Container, Header, Item, Wrap, Mask } from './styles';

const Contact = () => {
  return (
    <Wrap className="menuBar" id="menuBar">
      <Container>
        <Header>
          <span style={{ color: 'red' }}>C</span>ONTACT
        </Header>
        <div>
          <Item>
            <li>
              <OutLink href="#">
                <span>EMAIL</span>
                <Mask></Mask>
              </OutLink>
            </li>
            <li>
              <OutLink href="http://github.com/Yun-Jehyeok/no_name">
                <span>GITHUB</span>
                <Mask></Mask>
              </OutLink>
            </li>
            <li>
              <OutLink href="https://open.kakao.com/o/siDcC6nd">
                <span>KAKAO TALK</span>
                <Mask></Mask>
              </OutLink>
            </li>
          </Item>
        </div>
      </Container>
    </Wrap>
  );
};

export default Contact;
