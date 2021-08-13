import React from 'react';
import { Page, Text, Box } from './styles';

const Exhibition = () => {
  return (
    <>
      <div>
        <Page className="page_section" id="exhibition_area">
          <Text className="content_main" style={{ margin: '0px' }}>
            <div>
              <center>EXHIBITION</center>
            </div>
            <center_abs>
              <div
                className="abstract"
                style={{
                  position: 'absolute',
                  paddingLeft: '510px',
                  paddingTop: '50px',
                }}
              >
                <>
                  <div>Where</div>
                  <div>Do</div>
                  <div>You</div>
                  Go?
                </>
              </div>
            </center_abs>
            <a href="/518main">
              <Box
                className="length"
                style={{
                  left: '12%',

                  width: '270px',
                  height: '360px',
                }}
              ></Box>
            </a>
            <a href="vet_page">
              <Box
                className="length"
                style={{
                  left: '57%',

                  width: '270px',
                  height: '360px',
                }}
              ></Box>
            </a>
            <a href="/thousand_page">
              <Box
                className="square"
                style={{
                  left: '80%',
                  bottom: '18%',
                  width: '240px',
                  height: '240px',
                }}
              ></Box>
            </a>
            <a href="/jap_page">
              <Box
                className="width_2"
                style={{
                  left: '71%',
                  bottom: '55%',
                  width: '360px',
                  height: '270px',
                }}
              ></Box>
            </a>
            <a href="/625main">
              <Box
                className="width"
                style={{
                  left: '12%',
                  bottom: '55%',
                  width: '360px',
                  height: '270px',
                }}
              ></Box>
            </a>
            <a href="/419main">
              <Box
                className="length_2"
                style={{
                  left: '43%',
                  bottom: '64%',
                  width: '320px',
                  height: '200px',
                }}
              ></Box>
            </a>

            <ex_abs>
              <div
                className="ex_abs"
                style={{
                  paddingLeft: '1200px',
                  paddingTop: '255px',
                }}
              >
                국가를 위해
                <br />
                헌신한 분들을 위한
                <br />
                전시회
              </div>
            </ex_abs>
          </Text>
        </Page>
      </div>
    </>
  );
};

export default Exhibition;
