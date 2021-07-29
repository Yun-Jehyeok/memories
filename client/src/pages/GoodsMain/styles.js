import styled from 'styled-components';

export const Maintext = styled.p`
  position: absolute;
  left: 18px;
  top: 130px;
  font-size: 38px;
  font-weight: 200;
  & > span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 10px;
  }
`;

export const Background = styled.img`
  width: 1180px;
  height: 613px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  top: 190px;
  object-position: center top;
  object-fit: cover;
  z-index: 1;
`;

export const SectionBuy = styled.div`
  width: 100%;
  overflow: hidden;
  height: 140vh;
  position: absolute;
  top: 100vh;
  z-index: -1;
  & > section {
    width: 100%;
    height: 700px;
    background: rgba(252, 202, 64, 0.23);
  }
  & > section > p {
    width: 100%;
    position: relative;
    top: 36%;
    left: 4.5%;
    font-size: 40px;
    font-weight: 300;
  }
  & > section > p > p {
    border-bottom: 1px solid black;
    width: 110px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -230px;
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
  top: 420px;
  left: 40px;
`;

export const Cards = styled.div`
  position: absolute;
  flex-direction: row;
  height: 425px;
  width: 2000px;
  & > div {
    margin-left: 30px;
    background: #ffffff;
    flex-direction: col;
    position: static;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 350px;
    height: 380px;
    float: left;
  }
  & > div > img {
    position: relative;
    top: 15px;
  }
  & > div > div {
    position: relative;
    left: 40px;
    top: 30px;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const SectionDone = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 240vh;
  & > section {
    margin-top: 100px;
  }
  & > section > h2 {
    font-size: 60px;
    margin-bottom: 30px;
  }
  & > section > p {
    display: block;
  }
  & > div {
    width: 60%;
    margin: 60px 20% 0 20%;
  }
  & > div > div {
    float: left;
    width: 48%;
    margin-left: 2%;
    margin-bottom: 5%;
  }
  & > div > div > span {
    position: relative;
    top: -10px;
    left: 20px;
    font-size: 18px;
    font-weight: 400;
  }
  & > div > div > p {
    position: relative;
    left: 70px;
    top: 10px;
  }
`;

export const NumberCircle = styled.div`
  display: inline;
  position: relative;
  & > span {
    font-size: 22px;
    position: absolute;
    left: 17px;
    top: -20px;
    color: #ffffff;
  }
`;
