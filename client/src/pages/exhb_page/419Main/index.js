import React from 'react';
import FiveModal from './518Modal';
import { Container, Explain } from './styles';
import { Page } from 'assets/commonStyle/styles';

const ExhibitDetail = () => {
  return (
    <Page style={{ overflowY: 'hidden' }}>
      <div
        className="detali_page_pr"
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#2d2d2d',
        }} /*가운데정렬 미정*/
      >
        <Explain>
          <b>PHOTO ALBUM</b>
        </Explain>

        <Container>
          <FiveModal />
        </Container>
      </div>
    </Page>
  );
};

export default ExhibitDetail;
