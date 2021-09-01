import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../img/Main_Logo.PNG';

export const Img = styled.img.attrs({ src: `${LogoImg}` })`
  margin: 18px 0 0 20px;
  width: 7em;
`;

export function Logo(page) {
  return (
    <span>
      {page === 'goods' ? (
        <Link to="/goods">
          <Img />
        </Link>
      ) : (
        <Link to="/">
          <Img />
        </Link>
      )}
    </span>
  );
}

export const OutLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})``;

export const Btn = styled.button`
  background-color: #fba904;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 5px;
  border: none;
  font-weight: 400;
  font-size: 15px;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;
