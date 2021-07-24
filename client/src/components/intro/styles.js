import styled from "styled-components";

export const Page = styled.div`
  background: white;
  height: 100vh;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 14rem;
`;

export const Redtext = styled.span`
  color: #ff0000;
`;

export const Info = styled.div`
position: relative;
  color: black;
  padding-top: 11.5%;
  padding-left: 10%;
  font-size: 3rem;
  & > a {
    margin-top : -30px;
    font-size: 20px;
    text-decoration: none;
        color: black;
  & >red {
    color: red;
        }
`;
