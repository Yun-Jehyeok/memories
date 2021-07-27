import styled from 'styled-components';

export const Page = styled.div`
  width: 140px;
  height: 400px;
  margin-top: 40px;
  float: right;
  background-color: transparent;
  overflow: hidden;
  & > div {
    position: relative;
    width: 140px;
    right: 0;
    margint-top: 10px;
  }
  & > div > div {
    position: absolute;
    width: 60px;
    left: 0px;
    border-bottom: 3px solid #000000;
  }
`;

export const Pagenum = styled.p`
  position: relative;
  font-size: 40px;
  font-weight: 400;
  left: 65px;
  padding: 0;
  margin: 0;
`;

export const PageBorder = styled.p`
  position: absolute;
  width: 130px;
  right: 0;
  border-bottom: 1px solid #a4a4a4;
`;
