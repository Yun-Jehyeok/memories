import styled from 'styled-components';

export const Drop = styled.div`
  width: 300px;
  height: 240px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageZone = styled.div`
  display: flex;
  width: 300px;
  height: 240px;
  overflow-x: scroll;
  & > img {
    min-width: 300px;
    width: 300px;
    height: 240px;
  }
`;
