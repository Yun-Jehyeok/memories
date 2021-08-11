import styled from 'styled-components';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionDone = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 10vh;
  & > section {
    margin-top: 50px;
  }
  & > section > h2 {
    font-size: 50px;
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

export const Circle = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  color: #fba904;
  font-size: 45px;
`;
