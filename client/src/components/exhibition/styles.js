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
export const Box = styled.div`
  position: absolute;
  z-index: 300;
  border: 1px solid white;
  &: hover {
    border: 5px solid black;
    transition: all 0.3s;
    background-color: #000000;
  }
`;
