import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BuyArea = styled.section`
  position: relative;
  top: 90px;
  border-bottom: 1px solid #000000;
  & span {
    position: relative;
    bottom: 12px;
    right: 70px;
    font-size: 20px;
    cursor: pointer;
    -webkit-transition: color 0.4s;
  }
  & span:hover {
    color: #fba904;
  }
  & > #select {
    right: 100px;
    border-right: 1px solid black;
    padding-right: 30px;
  }
`;

export const CardArea = styled.div`
  position: relative;
  width: 20%;
  top: 130px;
  float: left;
  margin: 0px 45px 0px 25px;
`;
