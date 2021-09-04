import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & > div {
    width: 100%;
    height: 100vh;
  }
  & > div > .slide_wrap {
    width: 100%;
    height: 85vh;
    bottom: 0;
  }
`;

export const SlideBox = styled.div`
  width: 1200px;
  height: 550px;
  position: absolute;
  left: 30px;
  top: 120px;
  overflow: hidden;
  & > div {
    width: 100%;
    height: 100%;
  }
  & > div > div > .slide_content {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
    float: left;
  }
`;

export const Slide = styled.img`
  width: 1200px;
  height: 550px;
  object-position: center top;
  object-fit: cover;
`;
