import styled from 'styled-components';

export const Explain = styled.div`
  display: inline-block;
  position: fixed;
  font-size: 9vh;
  z-index: 50px;
  margin-left: 35%;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const age = styled.div`
  color: #1f1f1f;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  top: 45%;
  transform: translate(0, -50%);
`;

export const Item = styled.div`
  z-index: 200px;
  vertical-align: center;
  display: inline-block;
  width: 300px;
  height: 450px;
  overflow: hidden;
  margin-left: 8%;
  margin-bottom: 10%;
  background-color: white;
  box-shadow: -20px 20px 10px #a4a4a4;
  white-space: normal;
  cursor: pointer;
  & img {
    width: 100%;
    height: 300px;
  }
  & > div:nth-child(2) {
    padding: 30px;
    padding-top: 20px;
    & > h3 {
      margin-bottom: 20px;
    }
  }
`;

export const ModalBox = styled.div`
  display: flex;
  justify-content: space-between;
  & > div:nth-child(1) {
    margin-right: 30px;
    & > img {
      width: 300px;
      height: 300px;
    }
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & > span {
    margin-right: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;
