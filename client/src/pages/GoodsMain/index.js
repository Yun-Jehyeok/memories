import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// image import //
import slide1 from '../../assets/img/goodsPage_img.jpeg';
import slide2 from '../../assets/img/taegeuggi.png';
import slide3 from '../../assets/img/involved_img.png';

import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import GoodsPagenation from 'src/components/shared/goodsPagenation/goodsPagenation';
import { SlideBox, Slide, Page } from './styles';
import Axios from 'axios';

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

  const [Products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.get('/api/product/getProducts').then((res) => {
      if (res.data.success) {
        setProducts(res.data.products);
      } else {
        alert('Failed to fetch products');
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
              {Products.map((product) => {
                return (
                  <div>
                    <Link
                      className="slide_content slide"
                      key={product._id}
                      to={`/goods/${product._id}`}
                    >
                      <Slide src={slide3} alt="goodsMain" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </SlideBox>
        </div>
      </div>
    </Page>
  );
};

export default GoodsMain;
