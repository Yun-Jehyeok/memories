import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from 'redux/types';

// style component //
import {
  NavContainer,
  ShoppingArea,
  UserDropdown,
  Login,
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
        <div>
          <b>{userName}</b>님 오늘도 화이팅하세요!
        </div>
        <div>{Logo(page)}</div>
        <MenuContainer>
          <Link to="/goods/donation">Donation</Link>
          <Link to="/">Memories</Link>
          {isAuthenticated ? (
            <ShoppingArea>
              <Link to="/goods/shopping">
                <Badge count="0">
                  <Icon
                    type="shopping-cart"
                    style={{ fontSize: 30, marginBottom: 3 }}
                  />
                </Badge>
              </Link>
              <Dropdown overlay={menu}>
                <UserDropdown
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined />
                </UserDropdown>
              </Dropdown>
            </ShoppingArea>
          ) : (
            <Login />
          )}
        </MenuContainer>
      </FlexBoxContainer>
    </NavContainer>
  );
};

export default GoodsNavbar;
