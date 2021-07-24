import React from 'react';
import { Page, Info } from './styles';

const Intro = () => {
  return (
    <>
      <Page className="page_section" id="intro_area">
        <div className="row" style={{ height: '80vh', margin: '0px' }}>
          <Info className="col align-self-center">
            <b>
              <br />
              <span className="red" style={{ color: 'red' }}>
                이것
              </span>
              이야말로
              <br />
              무한한 가치를 가진 것이다
              <br />
              사람은 크고 작고
            </b>
            <a>
              <br />
              <div>Text - Double click to edit Text - Double </div>
              <div>click to edit Text - Double click to edit </div>
              <div>Text - Double click to edit</div>
            </a>
          </Info>
        </div>
      </Page>
    </>
  );
};

export default Intro;
