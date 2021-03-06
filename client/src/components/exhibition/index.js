import React from 'react';
import { Page, Text, Box, ExBox } from './styles';
import five_pic from 'assets/img/518signature.png';
import six_pic from 'assets/img/625signature.png';
import vet_pic from 'assets/img/vetsignature.png';
import twothousand_pic from 'assets/img/2000signature.png';
import four_pic from 'assets/img/419signature.jpg';
import { Link } from 'react-router-dom';

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

            <Link to="/exhibitDetail/419main">
              <ExBox
                className="ex_419"
                style={{
                  left: '12%',
                  width: '270px',
                  height: '360px',
                  textAlign: 'center',
                  lineHeight: '360px',
                }}
              >
                419혁명
              </ExBox>
              <Box
                className="length"
                style={{
                  left: '12%',
                  width: '270px',
                  height: '360px',
                }}
              >
                <img src={four_pic} alt="419" />
              </Box>
            </Link>

            <Link to="/exhibitDetail/vet_page">
              <ExBox
                className="ex_vet"
                style={{
                  left: '80%',
                  bottom: '40%',
                  width: '280px',
                  height: '360px',
                  lineHeight: '360px',
                  textAlign: 'center',
                  alignItems: 'center',
                }}
              >
                월남전
              </ExBox>
              <Box
                className="length"
                style={{
                  left: '80%',
                  bottom: '40%',
                  width: '280px',
                  height: '360px',
                }}
              >
                <img src={vet_pic} alt="월남전" />
              </Box>
            </Link>
            <Link to="/exhibitDetail/thousand_page">
              <ExBox
                className="ex_thousand"
                style={{
                  left: '57%',
                  bottom: '1%',
                  width: '280px',
                  height: '360px',
                  lineHeight: '360px',
                  textAlign: 'center',
                }}
              >
                근현대
              </ExBox>
              <Box
                className="square"
                style={{
                  left: '57%',
                  bottom: '1%',
                  width: '280px',
                  height: '360px',
                }}
              >
                <img src={twothousand_pic} alt="근현대" />
              </Box>
            </Link>

            <Link to="/exhibitDetail/625main">
              <ExBox
                className="ex_625"
                style={{
                  left: '12%',
                  bottom: '55%',
                  width: '360px',
                  height: '270px',
                  lineHeight: '270px',
                  textAlign: 'center',
                }}
              >
                625전쟁
              </ExBox>
              <Box
                className="width"
                style={{
                  left: '12%',
                  bottom: '55%',
                  width: '360px',
                  height: '270px',
                }}
              >
                <img src={six_pic} alt="625" />
              </Box>
            </Link>
            <Link to="/exhibitDetail/518Main">
              <ExBox
                className="ex_518"
                style={{
                  left: '45%',
                  bottom: '64%',
                  width: '380px',
                  height: '200px',
                  lineHeight: '200px',
                  textAlign: 'center',
                }}
              >
                518민주화
              </ExBox>
              <Box
                className="length_2"
                style={{
                  left: '45%',
                  bottom: '64%',
                  width: '380px',
                  height: '200px',
                }}
              >
                <img src={five_pic} alt="518" />
              </Box>
            </Link>

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
