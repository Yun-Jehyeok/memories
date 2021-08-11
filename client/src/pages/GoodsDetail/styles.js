import styled from 'styled-components';
import { RightCircleOutlined } from '@ant-design/icons';

export const PageHeader = styled.div`
  background: transparent;
  width: 100%;
  height: 130px;
  font-family: 'Roboto Slab', serif;
  font-style: normal;
  & > div > #goodsTitle {
    font-weight: 100;
    font-size: 68px;
    line-height: 95px;
    position: absolute;
    left: 150px;
    top: 127px;
  }
`;

export const Box = styled.div`
  width: 80%;
  height: 65vh;
  background: #ffffff;
  font-style: normal;
  margin: 0 10% 0 10%;
  & > div {
    padding-top: 50px;
    padding-left: 60px;
  }
  & > div > img {
    float: left;
  }
  & > div > p {
    float: left;
    padding: 10px 0 10px 40px;
    font-size: 20px;
    font-weight: 300;
  }
`;

export const BackgroundYellow = styled.div`
  position: absolute;
  top: 15vh;
  width: 100%;
  height: 85vh;
  z-index: -3;
  background: #feefc6;
`;

export const PageLink = styled.div`
  position: absolute;
  left: 77%;
  bottom: 65px;
  & > .LinkItem {
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    font-weight: 400;
  }
  & > .LinkItem > span {
    position: relative;
    top: 30px;
  }
`;

export const RightCircle = styled(RightCircleOutlined)`
  position: relative;
  color: #000000;
  font-size: 40px;
  margin-left: 10px;
  top: 10px;
`;
