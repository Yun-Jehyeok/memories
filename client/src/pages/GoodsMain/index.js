import React, { useState } from 'react';
import pageimg from '../../assets/img/goodsPage_img.jpeg';
import GoodsNavbar from 'src/components/goodsNavbar/goodsNavbar';

import {
  faChevronRight,
  faChevronLeft,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Maintext,
  SectionBuy,
  Frame,
  Cards,
  Icons,
  SectionDone,
  NumberCircle,
} from './styles';

const GoodsMain = () => {
  const goods_item = [
    { id: 1, name: 'goods 1', content: '굿즈 1에 대한 설명입니다.' },
    { id: 2, name: 'goods 2', content: '굿즈 2에 대한 설명입니다.' },
    { id: 3, name: 'goods 3', content: '굿즈 3에 대한 설명입니다.' },
    { id: 4, name: 'goods 4', content: '굿즈 4에 대한 설명입니다.' },
    { id: 5, name: 'goods 5', content: '굿즈 5에 대한 설명입니다.' },
  ];

  const donation_item = [
    {
      id: 1,
      title: 'XX에 기부한 내역입니다.',
      do_content: '기부 내역 : 20xx년 xx월 xx일',
      use_content: '사용 내역 : ...',
    },
    {
      id: 2,
      title: 'XX에 기부한 내역입니다.',
      do_content: '기부 내역 : 20xx년 xx월 xx일',
      use_content: '사용 내역 : ...',
    },
    {
      id: 3,
      title: 'XX에 기부한 내역입니다.',
      do_content: '기부 내역 : 20xx년 xx월 xx일',
      use_content: '사용 내역 : ...',
    },
    {
      id: 4,
      title: 'XX에 기부한 내역입니다.',
      do_content: '기부 내역 : 20xx년 xx월 xx일',
      use_content: '사용 내역 : ...',
    },
  ];

  const goods = goods_item.map((item) => (
    <div key={item.id}>
      <img src="http://placehold.it/350x250" />
      <div>
        <p>{item.name}</p>
        <p>{item.content}</p>
      </div>
    </div>
  ));

  const donation = donation_item.map((item) => (
    <div key={item.id}>
      <NumberCircle>
        <FontAwesomeIcon
          icon={faCircle}
          style={{
            color: '#FBA904',
            fontSize: '50px',
          }}
        />
        <span>{item.id}</span>
      </NumberCircle>
      <span>{item.title}</span>
      <p>
        {item.do_content} <br />
        {item.use_content}
      </p>
    </div>
  ));

  return (
    <>
      <div>
        <GoodsNavbar />
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
              top: '190px',
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
              <Cards>{goods}</Cards>
              <Icons>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    color: 'rgba(17, 19, 30, 0.2)',
                    fontSize: '2em',
                  }}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{
                    color: '#FBA904',
                    fontSize: '2em',
                    marginLeft: '30px',
                  }}
                />
              </Icons>
            </div>
          </Frame>
        </SectionBuy>
        <SectionDone>
          <section className="text-center">
            <h2>Donation History</h2>
            <p>
              굿즈 수익금을 통해 기부한 내역입니다.
              <br />
              당신의 소중한 참여가 국가 유공자 분들께 전달되었습니다.
            </p>
          </section>
          <div>{donation}</div>
        </SectionDone>
      </div>
    </>
  );
};

export default GoodsMain;
