import styled from "styled-components";
import LogoImg from "../img/Logo.png";

export const Logo = styled.img.attrs({ src: `${LogoImg}` })`
  margin: 15px 0 0 15px;
  width: 3.5em;
`;

export const OutLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})``;
