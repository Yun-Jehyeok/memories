import React from 'react';
import { Page, Text, Box } from './styles';
import { CursorProvider } from 'react-cursor-custom';

const Exhibition = () => {
  return (
    <>
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

          <Box
            className="length"
            style={{
              left: '12%',

              width: '300px',
              height: '400px',
            }}
          ></Box>
          <Box
            className="length"
            style={{
              left: '53%',

              width: '300px',
              height: '400px',
            }}
          ></Box>

          <Box
            className="width"
            style={{
              left: '10%',
              bottom: '55%',
              width: '400px',
              height: '300px',
            }}
          ></Box>
          <ex_abs>
            <div
              className="ex_abs"
              style={{
                paddingLeft: '1200px',
                paddingTop: '250px',
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
    </>
  );
};

export default Exhibition;
