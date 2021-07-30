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
    right: 210px;
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
`;
