import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  position: absolute;
  width: 30%;
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: -14px 35px 10px #47b3bf;
`;

export const FormContainer = styled.div`
  width: 80%;
  margin: 5% 0 0 10%;

  & > h1 {
    text-align: center;
  }
`;
