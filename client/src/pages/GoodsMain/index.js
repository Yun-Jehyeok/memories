import React from 'react';
import pageimg from '../../assets/img/goodsPage_img.jpeg';
import { Maintext, SectionBuy, Frame, Cards } from './styles';

const GoodsMain = () => {
  return (
    <>
      <div>
        <div style={{ width: '100%', height: '100vh' }}>
          <Maintext>
            Goods Page
            <span>굿즈 페이지입니다.</span>
          </Maintext>
          <img
            src={pageimg}
            alt="goodsMain"
            style={{
              width: '1180px',
              height: '613px',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
              top: '150px',
              objectPosition: 'center top',
              objectFit: 'cover',
            }}
          />
        </div>
        <SectionBuy>
          <section>
            <p>
              Goods Buy<p></p>
            </p>
          </section>
          <Frame>
            <div>
              <Cards>
                <div style={{ order: 0 }}>
                  <div>
                    <p>goods 1</p>
                    <p>굿즈 1에 대한 설명입니다.</p>
                  </div>
                </div>
                <div style={{ order: 1 }}>
                  <p>goods 2</p>
                  <p>굿즈 2에 대한 설명입니다.</p>
                </div>
                <div style={{ order: 2 }}>
                  <p>goods 3</p>
                  <p>굿즈 3에 대한 설명입니다.</p>
                </div>
                <div style={{ order: 3 }}>
                  <p>goods 4</p>
                  <p>굿즈 4에 대한 설명입니다.</p>
                </div>
              </Cards>
            </div>
          </Frame>
        </SectionBuy>
      </div>
    </>
  );
};

export default GoodsMain;
