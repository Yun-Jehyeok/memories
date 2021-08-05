import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, PageHeader, BackgroundYellow, PageLink } from './styles';
import { Page } from 'src/assets/commonStyle/styles';
import Axios from 'axios';

const GoodsDetail = (props) => {
  const [Product, setProduct] = useState([]);
  const goodsId = props.match.params.goodsId;

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${goodsId}`).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);

  return (
    <Page>
      {GoodsNavbar(props.page)}
      <BackgroundYellow></BackgroundYellow>
      <PageHeader>
        <div>
          <p id="goodsTitle">{Product.title}</p>
        </div>
      </PageHeader>
      <Box>
        <div>
          <img src={Product.images} />
          <p>
            상품 설명 : <br />
            {Product.description}
          </p>
        </div>
      </Box>
      <PageLink>
        <Link to="/goods" className="LinkItem">
          <span>다른 굿즈 보기</span>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            style={{
              position: 'relative',
              color: '#000000',
              fontSize: '45px',
              marginLeft: '10px',
              top: '10px',
            }}
          />
        </Link>
      </PageLink>
    </Page>
  );
};

export default GoodsDetail;
