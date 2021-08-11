import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../img/Logo.png';

export const Img = styled.img.attrs({ src: `${LogoImg}` })`
  margin: 23px 0 0 20px;
  width: 3.5em;
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
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;
