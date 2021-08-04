import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pageimg from '../../assets/img/goodsPage_img.jpeg';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import GoodsPagenation from 'src/components/shared/goodsPagenation/goodsPagenation';

import { Background, Page } from './styles';
import Axios from 'axios';

const GoodsMain = () => {
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
        <GoodsPagenation />
        <div style={{ width: '100%', height: '80vh' }}>
          {Products.map((product) => {
            return (
              <div key={product._id}>
                <Link to={`/goods/${product._id}`}>
                  <Background
                    src={product.images}
                    alt="goodsMain"
                    style={{ width: '1000px', height: '500px' }}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default GoodsMain;
