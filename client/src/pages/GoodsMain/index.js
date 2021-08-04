import React from 'react';
import { Link } from 'react-router-dom';

// image import //
import slide1 from '../../assets/img/goodsPage_img.jpeg';
import slide2 from '../../assets/img/taegeuggi.png';
import slide3 from '../../assets/img/involved_img.png';

import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import GoodsPagenation from 'src/components/shared/goodsPagenation/goodsPagenation';

import { SlideBox, Slide, Page } from './styles';

const GoodsMain = () => {
  var slideList = document.querySelector('.slide_list');
  var slideContents = document.querySelectorAll('.slide_content');
  var slideLen = slideContents.length;
  const slideWidth = 1180;
  const slideSpeed = 500;

  var curIndex = 0;

  const slideNext1 = () => {
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = 'translateX(0px)';
    curIndex = 0;
  };
  const slideNext2 = () => {
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = 'translateX(-' + slideWidth + 'px)';
    curIndex = 1;
  };
  const slideNext3 = () => {
    slideList.style.transition = slideSpeed * (2 - curIndex) + 'ms';
    slideList.style.transform = 'translateX(-' + slideWidth * 2 + 'px)';
    curIndex = 2;
  };

  return (
    <Page>
      <div>
        <GoodsNavbar />
        <div className="slide_wrap">
          <GoodsPagenation
            slideNext1={slideNext1}
            slideNext2={slideNext2}
            slideNext3={slideNext3}
          />
          {/* slide list */}
          <SlideBox className="slide_box">
            <div className="slide_list">
              <Link className="slide_content slide1" to="/goods/:goodsid">
                <Slide src={slide1} alt="slide1" />
              </Link>
              <Link className="slide_content slide2" to="/goods/:goodsid">
                <Slide src={slide2} alt="slide2" />
              </Link>
              <Link className="slide_content slide2" to="/goods/:goodsid">
                <Slide src={slide3} alt="slide3" />
              </Link>
            </div>
          </SlideBox>
        </div>
      </div>
    </Page>
  );
};

export default GoodsMain;
