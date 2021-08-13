import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from 'redux/types';

// style component //
import { Nav, ShoppingArea, UserDropdown, Shopping, Login } from './styles';
import { Logo } from 'assets/commonStyle/styles';

// icon //
import { UserOutlined } from '@ant-design/icons';
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
              <Shopping className="nav-item" />
            </Link>
            <Dropdown overlay={menu}>
              <UserDropdown
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined />
              </UserDropdown>
            </Dropdown>
            <span>
              <b>{user.name}</b>님 오늘도 화이팅하세요!
            </span>
          </ShoppingArea>
        ) : (
          <Login />
        )}
      </div>
    </Nav>
  );
};

export default GoodsNavbar;
