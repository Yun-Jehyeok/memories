import React from 'react';
import FiveModal from './518Modal';
import { Explain, Container } from './styles';
const five_page = () => {
  return (
    <div className="detali_page_pr" /*가운데정렬 미정*/>
      <Explain>
        <b>PHOTO ALBUM</b>
      </Explain>

      <Container>
        <FiveModal />
      </Container>
    </div>
  );
};

export default five_page;
