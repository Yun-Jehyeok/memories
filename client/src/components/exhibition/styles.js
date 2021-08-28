import styled from 'styled-components';

export const Page = styled.div`
  background: #1a1a1a;
  height: 100vh;
  width: 100%;
  margin: 0;
`;
export const Text = styled.div`
  position: absolute;

  color: rgba(255, 255, 255, 0.6);

  & > div > center {
    padding-top: 250px;
    padding-left: 250px;
    font-size: 72px;
    &: hover {
      color: white;
    }
  }
  & > center_abs {
    font-size: 72px;
    line-height: 1em;
    &: hover {
      color: white;
    }
  }
  & > ex_abs {
    font-size: 25px;
    padding-top: 280px;
    &: hover {
      color: white;
    }
  }
`;
export const Box = styled.div`
  position: absolute;
  z-index: 300;
  border: 1px solid white;
  &: hover {
    border: 5px solid black;

    background-color: #000000;
  }
`;
