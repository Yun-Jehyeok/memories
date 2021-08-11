import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

const Pagenation = () => {
  return (
    <div
      className="fixed-bottom"
      style={{
        width: '5%',
        height: '14vh',
        background: 'transparent',
        marginBottom: '30px',
        marginLeft: '96%',
      }}
    >
      <Container className="nav_list">
        <a type="button" id="intro_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a type="button" id="history_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a type="button" id="exhibition_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a type="button" id="involved_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </a>
      </Container>
    </div>
  );
};

export default Pagenation;
