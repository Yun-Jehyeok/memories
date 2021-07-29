import React from 'react';
import { Logo, OutLink } from '../../assets/commonStyle/styles';
import { Container, Header, Item, Wrap, Mask } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Wrap className="menuBar">
      <Logo />
      <FontAwesomeIcon
        id="Menu_bar"
        icon={faBars}
        style={{
          color: '#ffffff',
          fontSize: '2.4em',
          float: 'right',
          margin: '30px',
          cursor: 'pointer',
        }}
      />
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
