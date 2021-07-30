import React from 'react';
import { Nav } from './styles';
import { Logo } from '../../../assets/commonStyle/styles';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = (page) => {
  return (
    <Nav className="navBar">
      <div>
        <Logo />
        <a href="/" className="navLink navItem" id="memories">
          Memories
          <p></p>
        </a>
        <a href="/shopping" className="navItem">
          <FontAwesomeIcon
            className="nav-item"
            icon={faShoppingCart}
            style={{
              fontSize: '25px',
              position: 'absolute',
              color: '#A4A4A4',
              right: '90px',
              marginRight: '38px',
              marginTop: '45px',
            }}
          />
        </a>
        <a className="navItem">
          <FontAwesomeIcon
            className="nav-item"
            icon={faUser}
            style={{
              fontSize: '25px',
              position: 'absolute',
              right: '70px',
              color: '#A4A4A4',
              marginTop: '45px',
            }}
          />
        </a>
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
