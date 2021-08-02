import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../img/Logo.png';

export const Img = styled.img.attrs({ src: `${LogoImg}` })`
  margin: 15px 0 0 15px;
  width: 3.5em;
`;

export function Logo(page) {
  return (
    <span>
      {page === 'goods' ? (
        <Link to="/goods">
          <Img
            src={LogoImg}
            style={{ marginTop: '28px', marginLeft: '20px' }}
          />
        </Link>
      ) : (
        <Link to="/">
          <Img
            src={LogoImg}
            style={{ marginTop: '28px', marginLeft: '20px' }}
          />
        </Link>
      )}
    </span>
  );
}

export const OutLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})``;
