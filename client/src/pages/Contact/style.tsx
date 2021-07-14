import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 40%;
  padding-top: 7vh;
  margin-left: 12%;
`;

export const Header = styled.div`
  font-size: 13vh;
  font-weight: bold;
`;

export const Item = styled.div`
  font-size: 9vh;
  font-weight: bold;
  transition: all 0.3s linear;

  & a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    transform: translateX(1%);
  }
`;
