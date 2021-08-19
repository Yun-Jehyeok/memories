import React from 'react';
import { Navbar, Bar } from './styles';
import { Logo } from 'assets/commonStyle/styles';
import MenuIcon from 'assets/animation/Menubar';

const Header = (props) => {
  return (
    <Navbar className="navBar fixed-top">
      <Bar>
        <Logo />
        <MenuIcon onClickMenuBar={props.onClickMenuBar} />
      </Bar>
    </Navbar>
  );
};

export default Header;
