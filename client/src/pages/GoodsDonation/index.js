import React from 'react';
import { Page, NumberCircle, SectionDone } from './styles';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoodsDonation = () => {
  const nav = 'donation';
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
    <Page>
      {GoodsNavbar(nav)}
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
    </Page>
  );
};

export default GoodsDonation;
