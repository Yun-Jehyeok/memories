import React, { useState } from 'react';
import FourModal from './419Modal';
import { Explain } from './styles';
const four_page = () => {
  return (
    <div className="detail_page">
      <div
        className="detali_page_pr"
        style={{ marginLeft: '35%' }} /*가운데정렬 미정*/
      >
        <Explain>
          <b>PHOTO ALBUM</b>
        </Explain>
      </div>
      <FourModal />
    </div>
  );
};

export default four_page;
