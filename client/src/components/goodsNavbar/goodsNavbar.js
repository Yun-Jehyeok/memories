import React from 'react';
import { Nav } from './styles';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = () => {
  return (
    <Nav className="navBar">
      <div>
        <a href="#" id="goodsList">
          굿즈 보기
        </a>
        <FontAwesomeIcon
          className="nav-item"
          icon={faShoppingCart}
          style={{
            fontSize: '25px',
            position: 'absolute',
            color: '#A4A4A4',
            right: '90px',
            marginRight: '38px',
          }}
        />
        <FontAwesomeIcon
          className="nav-item"
          icon={faUser}
          style={{
            fontSize: '25px',
            position: 'absolute',
            right: '70px',
            color: '#A4A4A4',
          }}
        />
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
