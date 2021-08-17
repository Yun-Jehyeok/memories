import styled from 'styled-components';
import { Button } from 'antd';

export const Page = styled.div`
  background: #1a1a1a;
  height: 100vh;
  width: 100%;
`;
export const BoxWhite = styled(Button)`
  background-color: transparent;
  position: absolute;
  margin-top: 10%;
  margin-left: 10%;
  color: #ffffff;

  width: 300px;
  height: 400px;
  &:hover {
    background-color: red;
  }
`;
export const Date = styled.span`
  color: #a4a4a4;
`;

export const Desc = styled.span`
  color: #2d2d2d;
  margin-left: 12px;
`;
