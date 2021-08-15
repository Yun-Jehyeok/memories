import React from 'react';
import { Page, Pic } from './styles';

const six_page = () => {
  return (
    <Page className="page_section">
      <div
        className="625page"
        style={{
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>625페이지입니다.</h1>
      </div>
      <Pic className="pic1"></Pic>
    </Page>
  );
};

export default six_page;
