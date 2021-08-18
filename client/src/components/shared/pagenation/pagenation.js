import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Page, Container } from './styles';

const Pagenation = () => {
  return (
    <Page className="fixed-bottom">
      <Container className="nav_list">
        <Link className="icon" type="button" id="intro_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </Link>
        <Link className="icon" type="button" id="history_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </Link>
        <Link className="icon" type="button" id="exhibition_area_btn">
          <FontAwesomeIcon icon={faCircle} />
        </Link>
      </Container>
    </Page>
  );
};

export default Pagenation;
