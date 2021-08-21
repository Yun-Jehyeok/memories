import React, { useEffect, useState } from 'react';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import { Link } from 'react-router-dom';

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
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let cartItems = [];

    if (user && user.cart) {
      if (user.cart.length > 0) {
        user.cart.forEach((items) => {
          cartItems.push(items.id);
        });

        const data = {
          cartItems: cartItems,
          userCart: user.cart,
        };

        dispatch(getCartItems(data));
      }
    }
  }, []);

  const [select, setSelect] = useState('none');

  const onSelect = () => {
    if (select === 'selected') {
      setSelect('none');
    } else {
      setSelect('selected');
    }
  };

  useEffect(() => {
    if (cartDetail && cartDetail.length > 0) {
      calculateTotal(cartDetail);
    }
  }, [cartDetail]);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
  };

  const goods =
    cartDetail &&
    cartDetail.map((item) => (
      <CardArea key={item._id}>
        {select === 'selected' ? <Checkbox color="default" /> : <></>}
        <Link to={`/goods/${item._id}`}>
          <Card
            hoverable
            className="text-center"
            cover={
              <img
                src={`http://localhost:7000/${item.images}`}
                alt="productImage"
              />
            }
          >
            <Meta title={item.title} />
          </Card>
        </Link>
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
      <div>결제 총 금액: {Total}원</div>
      <section id="profile"></section>
    </Page>
  );
};

export default Cart;
