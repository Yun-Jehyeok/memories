import React from 'react';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import { Page, BuyArea, Card } from './styles';
import Checkbox from '@material-ui/core/Checkbox';

const Shopping = () => {
  const goods_buy_item = [
    { id: '1', src: 'http://placehold.it/350x250', title: '시계' },
    { id: '2', src: 'http://placehold.it/350x250', title: '물건' },
    { id: '3', src: 'http://placehold.it/350x250', title: '꽃' },
  ];

  const goods = goods_buy_item.map((item) => (
    <Card>
      <Checkbox color="default" style={{ marginLeft: '50px' }} />
      <div className="text-center">
        <img src={item.src} />
        <p>{item.title}</p>
      </div>
    </Card>
  ));
  return (
    <Page>
      <GoodsNavbar />
      <BuyArea className="text-end">
        <span id="select">선택</span>
        <span id="buy">구매하기</span>
      </BuyArea>
      {goods}
      <section id="profile"></section>
    </Page>
  );
};

export default Shopping;
