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
  // 애니메이션 //
  const [num, setNum] = useState(0);
  var slideList;
  var slideContents;
  var slideBtn;
  const slideWidth = 1180;
  const slideSpeed = 600;

  const slideNext = (index) => {
    setNum(index);
    slideList = document.querySelector('.slide_list');
    slideContents = document.querySelectorAll('.slide_content');
    slideBtn = document.querySelectorAll('.slideBtn');
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = 'translateX(-' + slideWidth * index + 'px)';
    for (var i = 0; i < slideBtn.length; i++) {
      slideBtn[i].style.color = '#a4a4a4';
      slideBtn[i].style.fontWeight = '200';
    }
    slideBtn[index].style.color = '#000000';
    slideBtn[index].style.fontWeight = '400';
    slideBtn[index].style.transition = 'color 0.7s';
    console.log(index);
  };

  // 물품 가져오기 //
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
          <GoodsPagenation slideNext={slideNext} />
          {/* slide list */}
          <SlideBox className="slide_box">
            <div className="slide_list">
              {Products.map((product) => {
                return (
                  <Link
                    className="slide_content slide"
                    key={product._id}
                    to={`/goods/${product._id}`}
                  >
                    <Slide src={product.image} alt="goodsMain" />
                  </Link>
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
