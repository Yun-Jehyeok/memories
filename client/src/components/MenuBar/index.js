import React from 'react';
import { Container, Header, Item, Wrap, Mask, ItemLink } from './styles';

const MenuBar = () => {
  return (
    <Wrap className="menuBar" id="menuBar">
      <Container>
        <Header>
          <span style={{ color: 'red' }}>C</span>ONTACT
        </Header>
        <div>
          <Item>
            <li>
              <ItemLink href="/goods">
                <span>굿즈 사러 가기</span>
                <Mask></Mask>
              </ItemLink>
            </li>
            <li>
              <ItemLink href="/goods">
                <span>문의하기</span>
                <Mask></Mask>
              </ItemLink>
            </li>
            <li>
              <ItemLink
                href="https://open.kakao.com/o/siDcC6nd"
                target="_blank"
                rel="noreferrer"
              >
                <span>KAKAO TALK</span>
                <Mask></Mask>
              </ItemLink>
            </li>
          </Item>
        </div>
      </Container>
    </Wrap>
  );
};

export default MenuBar;
