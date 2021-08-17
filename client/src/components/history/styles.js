import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button, Select } from 'antd';

export const Page = styled.div`
  background: #1a1a1a;
  height: 100vh;
  width: 100%;
`;

export const HistorySection = styled.div`
  height: 100vh;
  margin: 0;
  width: 100%;
`;

export const Year = styled.div`
  color: #2d2d2d;
  text-align: center;
  & > div > button {
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
`;

export const Sel = styled(Select).attrs({
  bordered: false,
})`
  background-color: transparent;
  width: 120px;
`;

export const Text = styled.p`
  font-size: 13.5rem;
`;

export const Redtext = styled.span`
  color: #ff0000;
`;

export const Info = styled.div`
  color: #ffffff;
  width: 80%;
  & > p {
    border-top: 1px solid white;
    width: 95px;
    margin-left: 35px;
  }
`;

export const Column = styled.div`
  text-align: left;
  font-size: 1.1rem;
`;

export const ChevronDown = styled(FontAwesomeIcon).attrs({
  icon: faChevronDown,
})`
  color: #ff0000;
  font-size: 2em;
`;

export const ChevronUp = styled(FontAwesomeIcon).attrs({ icon: faChevronUp })`
  color: #ff0000;
  font-size: 2em;
`;

export const ButtonWhite = styled(Button)`
  background-color: transparent;
  color: #ffffff;
  margin: 15px 0 0 220px;
  &:hover {
    background-color: transparent;
  }
`;

export const Date = styled.span`
  color: #a4a4a4;
`;

export const Desc = styled.span`
  color: #2d2d2d;
  margin-left: 12px;
`;
