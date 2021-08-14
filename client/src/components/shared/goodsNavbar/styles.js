import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
import { Btn } from 'assets/commonStyle/styles';

export const NavContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 10vh;

  & a {
    display: inline-block;
    margin-right: 20px;
    color: black;
    text-decoration: none;
  }
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #a4a4a4;
    font-size: 14px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  align-items: center;

  & > a {
    display: inline-block;
    font-size: 18px;

    &:hover {
      color: #fba904;
      border-bottom: 1px solid #fba904;
    }
  }
`;

export const ShoppingArea = styled.div`
  display: inline-block;

  & > a:nth-child(1) {
    font-size: 25px;
    color: #a4a4a4;

    & > span > i {
      font-size: 30;
      margin-bottom: 3;

      &:hover {
        color: #fba904;
      }
    }
  }
`;

export const Shopping = styled(ShoppingOutlined)`
  font-size: 25px;
  color: #a4a4a4;
  margin: 45px 38px 0 0;
  &:hover {
    color: #fba904;
  }
`;

export const UserDropdown = styled(Link)`
  font-size: 25px;

  & > span {
    color: #a4a4a4;

    &:hover {
      color: #fba904;
    }
  }
`;

// Login Area //
export const LoginBtn = styled(Btn)`
  display: inline-block;
`;

export function Login() {
  return (
    <Link to="/login">
      <LoginBtn>로그인</LoginBtn>
    </Link>
  );
}
