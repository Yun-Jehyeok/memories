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

        const data = {
          cartItems: cartItems,
          userCart: user.cart
        }

        dispatch(getCartItems(data))

        setItem(cartDetail)
      }
    }
  }, [user, cartDetail, dispatch]);

  const [select, setSelect] = useState('none');

  const onSelect = () => {
    if (select === 'selected') {
      setSelect('none');
    } else {
      setSelect('selected');
    }
  };

  const goods = cartDetail && cartDetail.map((item) => (
    <CardArea key={item._id}>
      {select === 'selected' ? <Checkbox color="default" /> : <></>}
      <Card hoverable className="text-center" cover={<img src={`http://localhost:7000/${item.images}`} alt="productImage" />}>
        <Meta title={item.title} />
      </Card>
    </CardArea>
  ))

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

export default Cart;
