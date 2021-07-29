import styled from 'styled-components';

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  top: 0;
  object-position: center top;
  object-fit: cover;
  z-index: -5;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -4;
  background: rgba(255, 255, 255, 0.5);
`;

export const PageHeader = styled.div`
  background: transparent;
  width: 100%;
  height: 220px;
  font-family: 'Roboto Slab', serif;
  font-style: normal;
  & > div > #goodsTitle {
    font-weight: 100;
    font-size: 68px;
    line-height: 95px;
  }
  & > div > #goodsContent {
    font-family: Roboto Slab;
    font-weight: 300;
    font-size: 23px;
    line-height: 37px;
  }
`;

export const Box = styled.div`
  width: 75%;
  height: 1200px;
  background: #ffffff;
  margin: 10px 12.5% 0 12.5%;
  & > div {
    padding-top: 80px;
  }
  & > div > #goodsName {
    padding-top: 30px;
    font-size: 28px;
    font-weight: 400;
  }
  & > div > p {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 300;
  }
  & > p {
    position: relative;
    top: 200px;
  }
`;

export const Card = styled.a`
  width: 560px;
`;

export const BackgroundYellow = styled.div`
  position: absolute;
  top: 170vh;
  width: 100%;
  height: 80vh;
  z-index: -3;
  background: #feefc6;
  & > div {
    position: absolute;
    left: 590px;
    top: 430px;
    font-size: 20px;
    font-weight: 300;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 0 50px 20px 40px;
  }
  & > div > span {
    position: relative;
    top: 0px;
  }
`;
