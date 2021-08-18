import React from 'react';
import background from 'assets/img/involved_page.png';
import involve from 'assets/img/taegeuggi.png';
import { Textpage, Page, Box } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Involved = () => {
  return (
    <div
      className="page_section"
      id="involved_area"
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <img
        src={background}
        alt="involved"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        z-index="-1"
      />
      <Page>
        <Textpage className="row">
          <div className="col-sm-4">
            <h2>
              <b>참 여 하 기</b>
            </h2>
            <br />
            <p>굿즈를 보고 싶으신가요?</p>
            <p>판매 수익금은 참전 용사분들을 위해 기부됩니다.</p>
            <a href="/goods">
              <span
                style={{
                  fontSize: '20px',
                  position: 'relative',
                  top: '15px',
                }}
              >
                {' '}
                굿즈 구매하기{' '}
              </span>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{
                  color: 'black',
                  fontSize: '4em',
                  position: 'absolute',
                }}
              />
            </a>
          </div>
          <div className="col-sm-8">
            <img
              src={involve}
              alt="img"
              style={{
                width: '53%',
                position: 'absolute',
              }}
            />
          </div>
          <Box className="float-end"></Box>
        </Textpage>
      </Page>
    </div>
  );
};

export default Involved;
