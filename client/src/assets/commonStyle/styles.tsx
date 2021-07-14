import styled from "styled-components";
import Logo from "../img/LogoImg.png";

export const LogoImg = styled.img.attrs({ src: `${Logo}` })`
  margin: 1.5% 0 0 1.5%;
`;

export const OutLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})``;
