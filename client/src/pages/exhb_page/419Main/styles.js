import styled from 'styled-components';

export const Explain = styled.div`
  display: inline-block;
  position: fixed;
  font-size: 9vh;
  z-index: 50px;
  margin-left: 35%;
  color: #e9c400;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  white-space: nowrap;
`;

export const age = styled.div`
  color: #1f1f1f;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transform: translate(0, 20%);
  overflow-y: hidden;
`;

export const Item = styled.div`
  z-index: 200px;
  vertical-align: center;
  display: inline-block;
  width: 300px;
  height: 450px;
  margin-left: 4%;
  margin-bottom: 10%;
  margin-right: 4%;
  background-color: transparent;
  white-space: normal;
  cursor: pointer;
  & > div:nth-child(1) {
    border: 4px solid #a4a4a4;
  }
  & img {
    width: 100%;
    height: 350px;
    object-position: center top;
    object-fit: cover;
  }
  
    & > div {
      font-size: 12px;
      color: #a4a4a4;
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
