import React, { useEffect, useState } from 'react';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

// styles //
import { Page, BuyArea, CardArea } from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from 'redux/actions';

const { Meta } = Card;

const Cart = () => {
  const dispatch = useDispatch();
  const { user, cartDetail } = useSelector((state) => state.auth);

  const [Item, setItem] = useState([])

  useEffect(() => {
    let cartItems = [];

    if(user && user.cart) {
      if(user.cart.length > 0) {
        user.cart.forEach(items => {
          cartItems.push(items.id)
        });

        dispatch(getCartItems(cartItems, user.cart))

        setItem(cartDetail)
      }
    }
  }, [user]);

  const [select, setSelect] = useState('none');

  const onSelect = () => {
    if (select === 'selected') {
      setSelect('none');
    } else {
      setSelect('selected');
    }
  };

  const goods_buy_item = [
    { id: '1', src: 'http://placehold.it/250x250', title: '시계' },
    { id: '2', src: 'http://placehold.it/250x250', title: '물건' },
    { id: '3', src: 'http://placehold.it/250x250', title: '꽃' },
  ];

  // const goods = cartDetail && cartDetail.map((item) => (
  //   <CardArea>
  //     {select === 'selected' ? <Checkbox color="default" /> : <></>}
  //     <Card hoverable className="text-center" cover={<img src="http://placehold.it/250x250" />}>
  //       <Meta title={item.title} />
  //     </Card>
  //   </CardArea>
  // ))
  // const goods = goods_buy_item.map((item) => (
  //   <CardArea>
  //     {select === 'selected' ? <Checkbox color="default" /> : <></>}
  //     <Card hoverable className="text-center" cover={<img src={item.src} />}>
  //       <Meta title={item.title} />
  //     </Card>
  //   </CardArea>
  // ));

  return (
    <Page>
      <GoodsNavbar />
      <BuyArea className="text-end">
        <span id="select" onClick={onSelect}>
          선택
        </span>
        <span id="buy">구매하기</span>
      </BuyArea>
      {Item}
      <section id="profile"></section>
    </Page>
  );
};

export default Cart;
