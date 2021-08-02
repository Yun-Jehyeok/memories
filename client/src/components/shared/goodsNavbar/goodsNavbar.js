import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav, Button } from './styles';
import { Logo } from '../../../assets/commonStyle/styles';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = (nav) => {
  const page = 'goods';
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Nav className="navBar">
      <div>
        {Logo(page)}
        {nav === 'donation' ? (
          <Link
            to="/donation"
            className="navLink navItem nav_active"
            id="donation"
          >
            Donation
            <p></p>
          </Link>
        ) : (
          <Link to="/donation" className="navLink navItem" id="donation">
            Donation
            <p></p>
          </Link>
        )}
        <Link to="/" className="navLink navItem" id="memories">
          Memories
          <p></p>
        </Link>
        {isAuthenticated ? (
          <span>
            <Link to="/shopping" className="navItem">
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
            </Link>
            <Link className="navItem">
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
            </Link>
          </span>
        ) : (
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
