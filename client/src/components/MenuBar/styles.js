import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #2d2d2d;
  color: white;
  overflow: hidden;
  top: -100vh;
  left: 0;
  z-index: 400;
`;

export const Container = styled.div`
  width: 40%;
  padding-top: 15vh;
  margin-left: 12%;
`;

export const Header = styled.div`
  font-size: 13vh;
  font-weight: bold;
`;

export const Item = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ItemLink = styled.a`
  display: inline-block;
  font-size: 9vh;
  color: white;
  transition: transform 0.5s;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 2vh;

  &:hover {
    transform: translateX(10px);
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -o-transform: translateX(10px);
    -ms-transform: translateX(10px);
    color: white;

    & span:nth-child(2) {
      width: 103%;
    }
  }
`;

export const Mask = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  width: 0%;
  height: 40%;
  background-color: #e9c400;
  transition: width 0.5s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;
