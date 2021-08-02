import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Background = styled.img`
  width: 1180px;
  height: 590px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  top: 120px;
  object-position: center top;
  object-fit: cover;
  z-index: 1;
`;
