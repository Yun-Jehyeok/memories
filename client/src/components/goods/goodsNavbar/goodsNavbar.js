import React from 'react';
import { Nav } from './styles';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = (page) => {
  return (
    <Nav className="navBar">
      <div>
        <a href="/" className="navLink" id="memories">
          Memories
          <p></p>
        </a>
        {page === 'collections' ? (
          <a
            href="/goods/collections"
            className="navLink"
            style={{ color: '#fba904' }}
          >
            Collections
            <p className="border"></p>
          </a>
        ) : (
          <a href="/goods/collections" className="navLink">
            Collections
            <p></p>
          </a>
        )}
        <a>
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
        </a>
        <a>
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
        </a>
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
