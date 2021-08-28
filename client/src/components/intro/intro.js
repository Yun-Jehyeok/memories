import React from 'react';
import { Page, Info } from './styles';
import flower2 from 'assets/img/꽃2.png';

const Intro = () => {
  return (
    <Page className="page_section section" id="intro_area">
      <div className="row">
        <img
          src={flower2}
          style={{
            position: 'absolute',
            zIndex: '10',
            left: '10px',
            top: '30%',
            width: '240px',
          }}
        />
        <Info className="col align-self-center">
          <b>
            <span className="red" style={{ color: 'red' }}></span>
            <br />
            국가 유공자분들을 위한 전시회
            <br />⌜ 기억들 ⌟ 입니다.
          </b>
        </Info>
      </div>
    </Page>
  );
};

export default Intro;
