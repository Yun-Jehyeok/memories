import styled from "styled-components";

export const Page = styled.div`
  background: #1a1a1a;
  height: 120vh;
  width: 100%;
`;
export const Year = styled.div`
  color: #2d2d2d;
  text-align: center;
  & > button {
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
`;

export const Text = styled.p`
  font-size: 14rem;
`;

export const Redtext = styled.span`
  color: #ff0000;
`;

export const Info = styled.div`
  color: #ffffff;
  & > Row > Col{
    border: 0.5px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
  }
`;
