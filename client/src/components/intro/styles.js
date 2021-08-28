import styled from 'styled-components';

export const Page = styled.div`
  background: #ffffff;
  height: 100vh;
  width: 100%;
`;

export const Info = styled.div`
  position: relative;
  color: black;
  padding-top: 20%;
  padding-left: 10%;
  font-size: 3rem;
  z-index: 30;
  & > a {
    margin-top : -30px;
    font-size: 20px;
    text-decoration: none;
        color: black;
  & > .red {
    color: red;
        }
`;
