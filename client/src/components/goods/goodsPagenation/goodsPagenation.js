import React from 'react';
import { Page, Pagenum, PageBorder } from './styles';

const GoodsPagenation = () => {
  return (
    <Page>
      <div>
        <Pagenum>01</Pagenum>
        <div></div>
        <PageBorder></PageBorder>
      </div>
      <div>
        <p
          style={{
            position: 'relative',
            fontSize: '35px',
            fontWeight: '200',
            color: '#a4a4a4',
            left: '68px',
            top: '10px',
          }}
        >
          02
        </p>
        <PageBorder></PageBorder>
      </div>
      <div>
        <p
          style={{
            position: 'relative',
            fontSize: '35px',
            fontWeight: '200',
            color: '#a4a4a4',
            left: '68px',
            top: '10px',
          }}
        >
          03
        </p>
        <PageBorder></PageBorder>
      </div>
    </Page>
  );
};

export default GoodsPagenation;
