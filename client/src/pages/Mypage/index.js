import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import { Page } from 'assets/commonStyle/styles';
import {
  Background,
  Box,
  Profile,
  BtnContainer,
  UserBox,
  Card,
} from './styles';
import { Btn } from 'assets/commonStyle/styles';
import {} from '../../redux/types';

const Mypage = (props) => {
  const { userName, address, registerDate } = useSelector(
    (state) => state.auth,
  );

  const userId = props.match.params.userId;

  return (
    <Page>
      <Helmet title={`기억들 - ${userName}님의 마이페이지`} />
      <Background>
        <GoodsNavbar />
        <Box>
          <Profile>
            <div>🌸 {userName} 님의 프로필</div>
            <div>
              <p>
                <b>가입일</b> : {registerDate}
              </p>
              <p>
                <b>주소</b> : {address}
              </p>
              <p>
                <b>닉네임</b> : {userName}
              </p>
            </div>
            <BtnContainer>
              <Link to={`/goods/${userId}/mypage/edit`}>
                <Btn>프로필 편집</Btn>
              </Link>
              <Btn>비밀번호 변경</Btn>
            </BtnContainer>
          </Profile>
          <UserBox>
            <Card>
              <p>✔️ 최근 본 상품</p>
            </Card>
            <Card>
              <p>✔️ 마음에 들어한 상품</p>
            </Card>
            <Card>
              <p>✔️ 내 문의 글</p>
            </Card>
          </UserBox>
        </Box>
      </Background>
    </Page>
  );
};

export default Mypage;
