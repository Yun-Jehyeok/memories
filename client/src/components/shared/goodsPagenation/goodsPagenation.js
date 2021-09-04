import React from 'react';
import { Page, Pagenum, PageBorder, PageNumSnd } from './styles';

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
        <PageNumSnd className="slideBtn" id="slide_btn_2">
          02
        </PageNumSnd>
        <PageBorder></PageBorder>
      </div>
      <div type="button" onClick={() => props.slideNext(2)}>
        <PageNumSnd className="slideBtn" id="slide_btn_3">
          03
        </PageNumSnd>
        <PageBorder></PageBorder>
      </div>
    </Page>
  );
};

export default GoodsPagenation;
