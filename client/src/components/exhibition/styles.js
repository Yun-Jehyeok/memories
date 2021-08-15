import styled from 'styled-components';

export const Page = styled.div`
  background: #1a1a1a;
  height: 100vh;
  width: 100%;
`;
export const Text = styled.div`
  position: absolute;

  color: rgba(255, 255, 255, 0.6);
  & > div > center {
    padding-top: 250px;
    padding-left: 100px;
    font-size: 72px;
  }
  & > center_abs {
    font-size: 72px;
    line-height: 1em;
  }
  & > ex_abs {
    font-size: 25px;
    padding-top: 300px;
  }
`;
export const Box = styled.div`
  position: absolute;
  z-index: 300;
  border: 1px solid white;
`;
