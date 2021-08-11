import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  & > div {
    position: absolute;
    width: 100%;
    height: 100vh;
  }
  & > div > .slide_wrap {
    position: absolute;
    width: 100%;
    height: 85vh;
    bottom: 0;
  }
`;

export const SlideBox = styled.div`
  width: 1250px;
  height: 590px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  & > div {
    width: 3544px;
    height: 590px;
  }
  & > div > div > .slide_content {
    width: 1250px;
    height: 590px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
    float: left;
  }
`;

export const Slide = styled.img`
  width: 1250px;
  height: 590px;
  object-position: center top;
  object-fit: cover;
`;
