import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(254, 232, 171, 0.3);
`;

export const Box = styled.div`
  width: 85%;
  margin: 30px 7.5% 0 7.5%;
  height: 450px;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  width: 40%;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;

  & > div:nth-child(1) {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
  }

  & p {
    font-size: 17px;
    margin: 35px 10% 10px 10%;
    padding-bottom: 15px;
    border-bottom: 1px solid #000000;
  }
`;

export const BtnContainer = styled.div`
  width: 80%;
  text-align: center;
  margin: 50px 10% 0 10%;

  & > button:nth-child(2) {
    margin-left: 7%;
  }
`;

export const UserBox = styled.div`
  width: 55%;
  height: 530px;
  background: #ffffff;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Card = styled.div`
  width: 90%;
  margin: 20px 5% 0 5%;
  height: 25%;

  & > p {
    font-size: 19px;
  }
`;
