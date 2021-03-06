import styled from 'styled-components';

export const Page = styled.div`
  z-index: 2;
  width: 140px;
  height: 400px;
  margin-top: 60px;
  background-color: transparent;
  overflow-x: hidden;
  left: 90.4%;
  position: relative;
  & > div {
    position: relative;
    width: 140px;
    right: 0;
    margint-top: 10px;
  }
`;

export const Pagenum = styled.p`
  position: relative;
  font-size: 40px;
  font-weight: 400;
  left: 65px;
  padding: 0;
  margin: 0;
  & > div {
    position: absolute;
    width: 60px;
    left: -55px;
    border-bottom: 3px solid #000000;
  }
`;

export const PageNumSnd = styled.p`
  position: relative;
  font-size: 35px;
  font-weight: 200;
  color: #a4a4a4;
  left: 68px;
  top: 10px;
  & > div {
    position: absolute;
    width: 60px;
    left: -55px;
    top: 57px;
    border-bottom: 3px solid #000000;
    z-index: 4;
  }
`;

export const PageBorder = styled.p`
  position: absolute;
  width: 130px;
  right: 0;
  border-bottom: 1px solid #a4a4a4;
`;
