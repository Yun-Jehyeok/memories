import React, { useState } from 'react';
import pageimg from '../../assets/img/goodsPage_img.jpeg';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import GoodsPagenation from 'src/components/shared/goodsPagenation/goodsPagenation';

import { Background, Page } from './styles';

const GoodsMain = () => {
  return (
    <Page>
      <div>
        <GoodsNavbar />
        <GoodsPagenation />
        <div style={{ width: '100%', height: '80vh' }}>
          <Background src={pageimg} alt="goodsMain" />
        </div>
      </div>
    </Page>
  );
};

export default GoodsMain;
