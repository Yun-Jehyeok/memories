import styled from 'styled-components';

export const Maintext = styled.p`
  position: absolute;
  left: 18px;
  top: 95px;
  font-size: 38px;
  font-weight: 200;
  & > span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 10px;
  }
`;

export const SectionBuy = styled.div`
  width: 100%;
  overflow: hidden;
  height: 170vh;
  & > section {
    width: 100%;
    height: 700px;
    background: rgba(252, 202, 64, 0.23);
  }
  & > section > p {
    width: 100%;
    position: relative;
    top: 45%;
    left: 4%;
    font-size: 30px;
    font-weight: 200;
  }
  & > section > p > p {
    border-bottom: 1px solid black;
    width: 80px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -200px;
  align-items: flex-start;
  padding: 0px;
  & > div {
    position: relative;
    flex: none;
    flex-grow: 0;
    margin: 0px 30px;
  }
`;

export const Icons = styled.div`
  position: relative;
  top: 450px;
  left: 30px;
`;

export const Cards = styled.div`
  position: absolute;
  flex-direction: row;
  height: 425px;
  width: 1729px;
  & > div {
    margin-left: 30px;
    background: #ffffff;
    flex-direction: col;
    position: static;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 400px;
    height: 425px;
    float: left;
  }
  & > div > div {
    position: relative;
    left: 40px;
    top: 290px;
    font-size: 18px;
    font-weight: 300;
  }
`;
