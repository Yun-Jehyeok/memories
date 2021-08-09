import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from 'redux/types';

import { Nav, ShoppingArea } from './styles';
import { Btn } from 'assets/commonStyle/styles';
import { Logo } from 'assets/commonStyle/styles';
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const GoodsNavbar = (nav) => {
  const page = 'goods';
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const LogOut = useCallback(() => {
    alert('로그아웃 하시겠습니까?');
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  const menu = (
    <Menu>
      <Menu.Item icon={<DownOutlined />}>
        <Link style={{ textDecoration: 'none' }}>마이페이지</Link>
      </Menu.Item>
      <Menu.Item>
        <span onClick={LogOut} style={{ textDecoration: 'none' }}>
          로그아웃
        </span>
      </Menu.Item>
    </Menu>
  );
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
          <ShoppingArea>
            <Link to="/goods/shopping" className="navItem">
              <ShoppingOutlined
                className="nav-item"
                style={{
                  fontSize: '25px',
                  position: 'absolute',
                  color: '#A4A4A4',
                  right: '80px',
                  marginRight: '38px',
                  marginTop: '45px',
                }}
              />
            </Link>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: '25px',
                  position: 'absolute',
                  color: '#A4A4A4',
                  right: '35px',
                  marginRight: '30px',
                  marginTop: '33px',
                }}
              >
                <UserOutlined />
              </a>
            </Dropdown>
            <span>{user.name}님 오늘도 화이팅하세요!</span>
          </ShoppingArea>
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
