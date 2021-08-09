import styled from 'styled-components';

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
