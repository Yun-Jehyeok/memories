import React from 'react';
import FiveModal from './518Modal';
import { Container, Explain } from './styles';

const ExhibitDetail = () => {
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

export default ExhibitDetail;
