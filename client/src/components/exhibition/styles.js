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
    display: inline-block;
    font-size: 72px;
    &: hover {
      transition: all 0.5s;

      color: white;
    }
  }
  & > center_abs {
    font-size: 72px;
    line-height: 1em;
    transition: all 0.5s;

    &: hover {
      transition: all 0.5s;

      color: white;
    }
  }
  & > ex_abs {
    &: hover {
      transition: all 0.5s;
      color: white;
    }
  }
`;
export const ExBox = styled.div`
  position: absolute;
  background: black;
  z-index: 500;
  opacity: 0.4;
  border: 3px solid black;

  font-size: 50px;
  color: white;
`;
export const Box = styled.div`
  position: absolute;
  z-index: 1000;
  border: 1px solid black;
  &: hover {
    z-index: 0;
    transition: all 0.3s;
    background-color: #000000;
  }
`;
