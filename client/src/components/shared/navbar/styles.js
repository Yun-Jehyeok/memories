import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = styled.div`
  bottom: 0;
  height: 10vh;
`;

export const Bar = styled.div`
  background: transparent;
  height: 10vh;
`;

export const MenuBar = styled(FontAwesomeIcon).attrs({ icon: faBars })`
  color: #000000;
  font-size: 2.4em;
  float: right;
  margin: 30px;
  cursor: pointer;
`;
