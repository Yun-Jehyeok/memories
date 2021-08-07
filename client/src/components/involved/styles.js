import styled from 'styled-components';

export const Page = styled.div`
  width: 90%;
  position: absolute;
  left: 5%;
  height: 90vh;
`;

export const Textpage = styled.div`
  position: relative;
  width: auto;
  height: 100vh;
  padding-top: 11%;
  padding-left: 4%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-radius: 23px;
  & > div > h2 {
    font-size: 5rem;
  }
  & > div > a {
    height: 20px;
    text-decoration: none;
    color: black;
  }
  & > div {
    padding: 0px;
  }
`;

export const Box = styled.div`
  position: relative;
  left: 40%;
  bottom: 45%;
  width: 40%;
  height: 70vh;
  border: 1px solid #a4a4a4;
`;
