import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Bar } from './styles';
import { Logo } from '../../assets/commonStyle/styles';

const Header = () => {
  const onClickMenuBar = () => {
    if (document.querySelector('.menuBar').style.top !== '0') {
      document.querySelector('.menuBar').style.top = '0';
    } else {
      document.querySelector('.menuBar').style.top = '-100vh';
    }
  };

  return (
    <Navbar className="navBar fixed-top">
      <Bar>
        <Logo />
        <FontAwesomeIcon
          id="Menu_bar"
          icon={faBars}
          style={{
            color: '#000000',
            fontSize: '2.4em',
            float: 'right',
            margin: '30px',
            cursor: 'pointer',
          }}
          onClick={onClickMenuBar}
        />
      </Bar>
    </Navbar>
  );
};

export default Header;
