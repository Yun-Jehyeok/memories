import styled from "styled-components";
import LogoImg from "../img/LogoImg.png";

export const Logo = styled.img.attrs({ src: `${LogoImg}` })`
  margin: 1.5% 0 0 1.5%;
`;

export const OutLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})``;
