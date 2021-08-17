import React, { useState } from 'react';
import { Page } from './styles';
import FourModal from './419Modal';
const four_page = () => {
  return (
    <Page className="page_section">
      <div className="419page">
        <h1 style={{ position: 'absolute', top: '50%', color: 'white' }}>
          419페이지입니다.
        </h1>
        <FourModal />
      </div>
      ;
    </Page>
  );
};

export default four_page;
