import React from 'react';
import FourModal from './419Modal';
import { Explain, Container } from './styles';
const four_page = () => {
  return (
    <div className="detali_page_pr" /*가운데정렬 미정*/>
      <Explain>
        <b>PHOTO ALBUM</b>
      </Explain>

      <Container>
        <FourModal />
      </Container>
    </div>
  );
};

export default four_page;
