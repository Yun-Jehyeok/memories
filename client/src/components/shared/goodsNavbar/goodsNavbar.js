import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from 'redux/types';

// style component //
import {
  NavContainer,
  ShoppingArea,
  UserDropdown,
  FlexBoxContainer,
  MenuContainer,
} from './styles';
import { Logo } from 'assets/commonStyle/styles';

// icon //
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Badge, Icon } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const GoodsNavbar = () => {
  const page = 'goods';
  const { isAuthenticated, userName } = useSelector((state) => state.auth);

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
    <NavContainer>
      <FlexBoxContainer>
        <div>{Logo(page)}</div>
        <MenuContainer>
          <Link to="/goods/donation" className="nav-item nav-border">
            DONATIONS
          </Link>
          <Link to="/" className="nav-item nav-border">
            MEMORIES
          </Link>
          {isAuthenticated ? (
            <ShoppingArea>
              <div>
                <b>{userName}</b>님 오늘도 화이팅하세요!
              </div>
              <Link to="/goods/cart">
                <Badge count={1}>
                  <Icon
                    type="shopping-cart"
                    style={{ fontSize: 24, marginBottom: 3 }}
                  />
                </Badge>
              </Link>
              <Dropdown overlay={menu}>
                <UserDropdown
                  className="ant-dropdown-link nav-item"
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined />
                </UserDropdown>
              </Dropdown>
            </ShoppingArea>
          ) : (
            <div>
              <Link to="/login" className="nav-item nav-border">
                LOGIN
              </Link>
              <Link to="/signup" className="nav-item nav-border">
                SIGNUP
              </Link>
            </div>
          )}
        </MenuContainer>
      </FlexBoxContainer>
    </NavContainer>
  );
};

export default GoodsNavbar;
