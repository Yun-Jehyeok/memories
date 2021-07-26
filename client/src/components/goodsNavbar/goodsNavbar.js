import React from 'react';
import { Nav } from './styles';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = () => {
  return (
    <Nav className="navBar">
      <div>
        <FontAwesomeIcon
          className="nav-item"
          icon={faUser}
          style={{
            fontSize: '2em',
            float: 'right',
          }}
        />
        <FontAwesomeIcon
          className="nav-item"
          icon={faShoppingCart}
          style={{
            fontSize: '2em',
            float: 'right',
            marginRight: '38px',
          }}
        />
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
