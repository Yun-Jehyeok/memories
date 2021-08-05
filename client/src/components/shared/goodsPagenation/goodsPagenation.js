import React from 'react';
import { Page, Pagenum, PageBorder, Pagenum_snd } from './styles';

const GoodsPagenation = (props) => {
  return (
    <Page>
      <div type="button" onClick={() => props.slideNext(0)}>
        <Pagenum className="slideBtn" id="slide_btn_1">
          01
        </Pagenum>
        <PageBorder></PageBorder>
      </div>
      <div type="button" onClick={() => props.slideNext(1)}>
        <Pagenum_snd className="slideBtn" id="slide_btn_2">
          02
        </Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
      <div type="button" onClick={() => props.slideNext(2)}>
        <Pagenum_snd className="slideBtn" id="slide_btn_3">
          03
        </Pagenum_snd>
        <PageBorder></PageBorder>
      </div>
    </Page>
  );
};

export default GoodsPagenation;
