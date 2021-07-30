import React from 'react';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import collectionPage from '../../assets/img/collectionsPage.jpeg';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Background,
  Page,
  Box,
  PageHeader,
  BackgroundYellow,
  Card,
} from './styles';

const GoodsCollections = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '240vh',
      }}
    >
      {GoodsNavbar(props.page)}
      <Background src={collectionPage} />
      <Page></Page>
      <PageHeader>
        <div className="text-center">
          <p id="goodsTitle">Goods Title</p>
          <p id="goodsContent">6.25 전쟁을 모티브로 한 굿즈입니다.</p>
        </div>
      </PageHeader>
      <Box>
        <div className="text-center">
          <img src="http://placehold.it/350x350" />
          <p id="goodsName">XX시계</p>
          <p>
            상품 설명 : <br />
            6.25 에서 xx을 본따 만든 굿즈
          </p>
        </div>
        <p>
          <Card>
            <img src="http://placehold.it/540x400" />
          </Card>
          <Card>
            <img src="http://placehold.it/540x400" />
          </Card>
        </p>
      </Box>
      <BackgroundYellow>
        <div>
          <span>다른 굿즈 보기</span>
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              position: 'relative',
              color: '#A4A4A4',
              fontSize: '50px',
              marginLeft: '30px',
              top: '10px',
            }}
          />
        </div>
      </BackgroundYellow>
    </div>
  );
};

export default GoodsCollections;
