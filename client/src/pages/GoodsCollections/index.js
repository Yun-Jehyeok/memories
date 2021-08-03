import React from 'react';
import { Link } from 'react-router-dom';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, PageHeader, BackgroundYellow, PageLink } from './styles';
import { Page } from 'src/assets/commonStyle/styles';

const GoodsCollections = (props) => {
  return (
    <Page>
      {GoodsNavbar(props.page)}
      <BackgroundYellow></BackgroundYellow>
      <PageHeader>
        <div>
          <p id="goodsTitle">Goods Name</p>
        </div>
      </PageHeader>
      <Box>
        <div>
          <img src="http://placehold.it/350x350" />
          <p>
            상품 설명 : <br />
            6. 25 전쟁을 모티브로 한 굿즈 입니다.
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

export default GoodsCollections;
