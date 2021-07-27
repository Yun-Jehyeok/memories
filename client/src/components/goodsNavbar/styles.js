import styled from 'styled-components';

export const Nav = styled.div`
  background-color: transparent;
  width: 100%;
  height: 10vh;
  margin-top: 45px;
  & > div {
    margin-right: 80px;
  }
  & > div > a {
    text-decoration: none;
    color: #000000;
    position: absolute;
    right: 220px;
    font-size: 18px;
  }
`;
