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
    right: 200px;
    font-size: 18px;
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
    right: 330px;
  }
  & > div > .nav_active {
    color: #fba904;
  }
`;

export const Button = styled.button`
  background-color: #fba904;
  color: #ffffff;
  padding: 10px 30px;
  position: absolute;
  right: 50px;
  margin-top: 36px;
  border-radius: 5px;
`;
