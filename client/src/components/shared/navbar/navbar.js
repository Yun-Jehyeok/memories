import React from 'react';
import { Navbar, Bar, MenuBar } from './styles';
import { Logo } from 'assets/commonStyle/styles';

const Header = (props) => {
  return (
    <Navbar className="navBar fixed-top">
      <Bar>
        <Logo />
        <MenuBar id="Menu_bar" onClick={props.onClickMenuBar} />
      </Bar>
    </Navbar>
  );
};

export default Header;
