import React from 'react';
import { Page, Pagenum, PageBorder, Pagenum_snd } from './styles';

const GoodsPagenation = (props) => {
  return (
    <Page>
      <div type="button" className="slide_btn_1" onClick={props.slideNext1}>
        <Pagenum>01</Pagenum>
        <div></div>
        <PageBorder></PageBorder>
      </div>
      <div type="button" className="slide_btn_2" onClick={props.slideNext2}>
        <Pagenum_snd>02</Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
      <div type="button" className="slide_btn_3" onClick={props.slideNext3}>
        <Pagenum_snd>03</Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
    </Page>
  );
};

export default GoodsPagenation;
