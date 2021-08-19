import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  align-items: center;

  & a {
    display: inline-block;

    &:hover {
      color: #fba904;
    }
  }
  & .nav-item {
    color: #a4a4a4;
    font-weight: 400;
    font-size: 14px;
    margin-right: 30px;
  }
  & .nav-border {
    display: inline-block;

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
  & > div:nth-child(1) {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #a4a4a4;
    font-size: 14px;
  }
`;

export const UserDropdown = styled(Link)`
  & > span {
    color: #a4a4a4;
    font-size: 24px;
    &:hover {
      color: #fba904;
    }
  }
`;
