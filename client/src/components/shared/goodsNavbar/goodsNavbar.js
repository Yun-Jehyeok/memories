import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styles';
import { Btn } from '../../../assets/commonStyle/styles';
import { Logo } from '../../../assets/commonStyle/styles';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsNavbar = (nav) => {
  const page = 'goods';
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <Nav className="navBar">
      <div>
        {Logo(page)}
        {nav === 'donation' ? (
          <Link
            to="/goods/donation"
            className="navLink navItem nav_active"
            id="donation"
          >
            Donation
            <p></p>
          </Link>
        ) : (
          <Link to="/goods/donation" className="navLink navItem" id="donation">
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
            <Link to="/goods/shopping" className="navItem">
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
            <Link className="navItem" to="/goods">
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
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '70px',
                color: '#A4A4A4',
                fontSize: '14px',
              }}
            >
              {user.name}님 오늘도 화이팅하세요!
            </span>
          </span>
        ) : (
          <Link to="/login">
            <Btn
              style={{
                position: 'absolute',
                right: '50px',
                marginTop: '36px',
              }}
            >
              로그인
            </Btn>
          </Link>
        )}
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
