import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 4.5vh;
  line-height: 60px;
  letter-spacing: -0.75px;
  margin-top: 20vh;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 40vh;
  max-width: 40vh;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  width: 100%;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 1.4vh;
    cursor: pointer;
    line-height: 1.46666667;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 1vh;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 4.5vh;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 1.4vh;
  font-weight: 900;
  height: 4.2vh;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 1.2vh;
  color: #616061;
  margin: 0 auto 8px;
  width: 40vh;
  max-width: 40vh;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      color: #1280a0;
    }
  }
`;
