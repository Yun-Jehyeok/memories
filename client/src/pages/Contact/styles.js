import { OutLink } from "src/assets/commonStyle/styles";
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

export const Item = styled.ul`
  list-style: none;
  padding: 0;

  ${OutLink} {
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

      & span:nth-child(2) {
        width: 103%;
      }
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
