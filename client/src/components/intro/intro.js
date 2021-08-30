import React from 'react';
import { Page, Info } from './styles';
import flower1 from 'assets/img/꽃1.png';
import flower2 from 'assets/img/꽃2.png';
import flower3 from 'assets/img/꽃3.PNG';

const Intro = () => {
  return (
    <Page className="page_section section" id="intro_area">
      <div className="row">
        <img
          src={flower1}
          style={{
            position: 'absolute',
            zIndex: '10',
            left: '-40px',
            top: '35%',
            width: '280px',
          }}
        />
        <img
          src={flower2}
          style={{
            position: 'absolute',
            zIndex: '10',
            left: '10px',
            top: '22%',
            width: '280px',
          }}
        />
        <Info className="col align-self-center">
          <b>
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
