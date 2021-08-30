import React from 'react';
import { Page, Text, Box } from './styles';
import five_pic from 'assets/img/518signature.png';
import six_pic from 'assets/img/625signature.png';
import vet_pic from 'assets/img/vetsignature.png';
import twothousand_pic from 'assets/img/2000signature.png';
import four_pic from 'assets/img/419signature.jpg';

const Exhibition = () => {
  return (
    <div
      className="page_section section"
      id="exhibition_area"
      style={{ width: '100%', height: '100vh' }}
    >
      <div>
        <Page>
          <Text className="content_main">
            <div
              style={{
                marginTop: '250px',
                marginLeft: '650px',
              }}
            >
              <center>EXHIBITION</center>
            </div>
            <center_abs>
              <div
                className="abstract"
                style={{
                  position: 'absolute',
                  marginLeft: '510px',
                  marginTop: '50px',
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
            <a href="/419main/exhibitDetail">
              <Box
                className="length"
                style={{
                  left: '12%',
                  width: '270px',
                  height: '360px',
                }}
              >
                <img src={four_pic} style={{ width: '100%', height: '100%' }} />
              </Box>
            </a>
            <a href="/vet_page/exhibitDetail">
              <Box
                className="length"
                style={{
                  left: '80%',
                  bottom: '40%',
                  width: '280px',
                  height: '360px',
                }}
              >
                <img src={vet_pic} style={{ width: '100%', height: '100%' }} />
              </Box>
            </a>
            <a href="/thousand_page/exhibitDetail">
              <Box
                className="square"
                style={{
                  left: '57%',
                  bottom: '1%',
                  width: '280px',
                  height: '360px',
                }}
              >
                <img
                  src={twothousand_pic}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            </a>

            <a href="/625main/exhibitDetail">
              <Box
                className="width"
                style={{
                  left: '12%',
                  bottom: '55%',
                  width: '360px',
                  height: '270px',
                }}
              >
                <img src={six_pic} style={{ width: '100%', height: '100%' }} />
              </Box>
            </a>
            <a href="/518Main/exhibitDetail">
              <Box
                className="length_2"
                style={{
                  left: '45%',
                  bottom: '64%',
                  width: '380px',
                  height: '200px',
                }}
              >
                <img src={five_pic} style={{ width: '100%', height: '100%' }} />
              </Box>
            </a>

            <ex_abs>
              <div
                className="ex_abs"
                style={{
                  display: 'inline-flex',
                  marginLeft: '1120px',
                  marginTop: '220px',
                  fontSize: '32px',
                }}
              >
                <>
                  <div>
                    국가를 위해
                    <br />
                    헌신한 분들을 위한
                    <br />
                    전시회
                  </div>
                </>
              </div>
            </ex_abs>
          </Text>
        </Page>
      </div>
    </div>
  );
};

export default Exhibition;
