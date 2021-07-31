import React from 'react';
import { Page, Pagenum, PageBorder, Pagenum_snd } from './styles';

const GoodsPagenation = () => {
  return (
    <Page>
      <div>
        <Pagenum>01</Pagenum>
        <div></div>
        <PageBorder></PageBorder>
      </div>
      <div>
        <Pagenum_snd>02</Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
      <div>
        <Pagenum_snd>03</Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
    </Page>
  );
};

export default GoodsPagenation;
