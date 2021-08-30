import styled from 'styled-components';
import { RightCircleOutlined } from '@ant-design/icons';

export const Box = styled.div`
  width: 80%;
  height: 65vh;
  background: #ffffff;
  margin: 8vh 10% 0 10%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  padding-top: 50px;
  padding-left: 60px;
`;

export const DescriptionBox = styled.div`
  position: absolute;
  top: 15vh;
  width: 100%;
  height: 85vh;
  background: rgba(254, 232, 171, 0.3);
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
