import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  background-color: white;
  width: 30%;
  margin-left: 35%;
  height: 80vh;
  border-radius: 13px;
  overflow: hidden;
`;

export const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 5.5vh;
  line-height: 60px;
  letter-spacing: -0.75px;
  margin-bottom: 50px;
  color: #4a154b;
  padding-top: 3vw;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 80%;
  max-width: 80%;
  background-color: white;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  width: 100%;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 2.5vh;
    font-weight: 700;
    cursor: pointer;
    line-height: 1.46666667;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 74, 21, 75), 1);
  border: 2px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 2vh;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 6vh;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &::placeholder {
    color: #8977ad;
  }
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 40%;
  max-width: 40%;
  margin-left: 30%;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 2.4vh;
  font-weight: 900;
  height: 5.5vh;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 30px;
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

export const LinkContainer = styled.div`
  text-align: center;
  font-size: 2.2vh;
  color: black;
`;

export const Error = styled.div`
  font-size: 1.9vh;
  color: red;
`;
