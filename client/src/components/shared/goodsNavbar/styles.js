import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
import { Btn } from 'assets/commonStyle/styles';

export const Nav = styled.div`
  background-color: transparent;
  width: 100%;
  height: 10vh;
  z-index: 5;
  & > div {
    height: 10vh;
  }
  & > div > .navItem {
    margin-top: 45px;
  }
  & > div > .navLink {
    text-decoration: none;
    color: #000000;
    position: absolute;
    right: 190px;
    font-size: 16px;
    -webkit-transition: color 0.4s;
  }
  & > div > .navLink:hover {
    color: #fba904;
    & > p {
      border-bottom: 1.5px solid #fba904;
      width: 100%;
      position: absolute;
    }
  }
  & > div > #donation {
    right: 305px;
  }
  & > div > .nav_active {
    color: #fba904;
  }
`;

export const ShoppingArea = styled.span`
  & > span {
    position: absolute;
    top: 10px;
    right: 60px;
    color: #a4a4a4;
    font-size: 14px;
  }
`;

export const Shopping = styled(ShoppingOutlined)`
  font-size: 25px;
  position: absolute;
  color: #a4a4a4;
  right: 80px;
  margin: 45px 38px 0 0;
  &:hover {
    color: #fba904;
  }
`;

export const UserDropdown = styled(Link)`
  font-size: 25px;
  position: absolute;
  color: #a4a4a4;
  right: 35px;
  margin-right: 30px;
  margin-top: 33px;
  &:hover {
    color: #fba904;
  }
`;

// Login Area //
export const LoginBtn = styled(Btn)`
  position: absolute;
  right: 50px;
  margin-top: 36px;
`;

export function Login() {
  return (
    <Link to="/login">
      <LoginBtn>로그인</LoginBtn>
    </Link>
  );
}
