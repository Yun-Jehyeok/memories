import React, { useState } from 'react';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

// styles //
import { Page, BuyArea, CardArea } from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

const Shopping = () => {
  const [select, setSelect] = useState('none');

  const onSelect = () => {
    if (select === 'selected') {
      setSelect('none');
    } else {
      setSelect('selected');
    }
  };

  const goods_buy_item = [
    { id: '1', src: 'http://placehold.it/250x300', title: '시계' },
    { id: '2', src: 'http://placehold.it/250x300', title: '물건' },
    { id: '3', src: 'http://placehold.it/250x300', title: '꽃' },
  ];

  const goods = goods_buy_item.map((item) => (
    <CardArea>
      {select === 'selected' ? <Checkbox color="default" /> : <></>}
      <Card hoverable className="text-center" cover={<img src={item.src} />}>
        <Meta title={item.title} />
      </Card>
    </CardArea>
  ));

  return (
    <Page>
      <GoodsNavbar />
      <BuyArea className="text-end">
        <span id="select" onClick={onSelect}>
          선택
        </span>
        <span id="buy">구매하기</span>
      </BuyArea>
      {goods}
      <section id="profile"></section>
    </Page>
  );
};

export default Shopping;
