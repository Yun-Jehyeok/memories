import React, { useEffect, useState } from 'react';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

// styles //
import { Page } from './styles';
import { Table, Icon, Button } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from 'redux/actions';

const columns = [
  {
    title: '',
    dataIndex: 'images',
    key: 'images',
    align: 'center',
    width: 80,
    render: (images) => (
      <img
        src={`http://localhost:7000/${images[0]}`}
        style={{ width: '100px', height: '100px' }}
      />
    ),
  },
  {
    title: '상품명',
    dataIndex: 'title',
    key: 'title',
    width: 80,
    align: 'center',
  },
  {
    title: '상품정보',
    dataIndex: 'description',
    key: 'description',
    width: 400,
    align: 'center',
  },
  {
    title: '상품금액',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    width: 80,
    render: (price) => <div>{price} 원</div>,
  },
];

const Cart = () => {
  const dispatch = useDispatch();
  const { user, cartDetail, isLoading } = useSelector((state) => state.auth);
  const [Total, setTotal] = useState(0);
  const [checkStrictly, setCheckStrictly] = useState(false);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    onSelect: (record, selected, selectedRows) => {
      let total = 0;

      selectedRows.map((item) => {
        total += item.price;
      });

      setTotal(total);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      let total = 0;

      selectedRows.map((item) => {
        total += item.price;
      });

      setTotal(total);
    },
  };

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
  }, [user, dispatch]);

  return (
    <Page>
      <GoodsNavbar />
      <div style={{ fontSize: '32px', marginLeft: '5%', marginBottom: '30px' }}>
        <Icon type="shopping-cart" style={{ marginRight: '10px' }} />
        장바구니
      </div>
      {isLoading ? (
        ''
      ) : (
        <Table
          columns={columns}
          dataSource={cartDetail}
          pagination={{ position: ['none', 'none'] }}
          rowSelection={{ ...rowSelection, checkStrictly }}
          footer={() => (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              결제 총 금액: {Total} 원
            </div>
          )}
          bordered
          style={{ width: '90%', marginLeft: '5%' }}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '5%',
          marginTop: '24px',
        }}
      >
        <Button type="primary" style={{ width: '80px' }}>
          구매하기
        </Button>
      </div>

      <section id="profile"></section>
    </Page>
  );
};

export default Cart;
