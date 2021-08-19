import styled from 'styled-components';

export const Page = styled.div`
  width: 5%;
  height: 14vh;
  background: transparent;
  margin-bottom: 10px;
  margin-left: 96%;
  z-index: 200;
`;

export const Container = styled.div`
  width: 20px;
  padding-bottom: 8px;
  margin: 5px;
  & > .icon {
    color: #2d2d2d;
    fontsize: 1.1em;
    margin: 2px;
    cursor: pointer;
  }
`;
