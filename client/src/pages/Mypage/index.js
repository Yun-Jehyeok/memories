import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import ChangepwModal from 'components/ChangepwModal/ChangepwModal';

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
  const { userName, user } = useSelector((state) => state.auth);

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
                <b>가입일</b> : {String(user.register_date).substring(0, 10)}
              </p>
              <p>
                <b>주소</b> : {user.address}
              </p>
              <p>
                <b>닉네임</b> : {userName}
              </p>
            </div>
            <BtnContainer>
              <Link to={`/goods/${user._id}/mypage/edit`}>
                <Btn>프로필 편집</Btn>
              </Link>
              <ChangepwModal />
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
