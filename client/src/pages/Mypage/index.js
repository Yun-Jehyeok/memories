import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMypage } from 'redux/actions';

import Fade from 'react-reveal/Fade';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import ChangepwModal from 'components/ChangepwModal/ChangepwModal';

import { Card, Col, Row } from 'antd';
import { Page } from 'assets/commonStyle/styles';
import {
  Background,
  Box,
  Profile,
  BtnContainer,
  UserBox,
  Cardarea,
} from './styles';
import { Btn } from 'assets/commonStyle/styles';

const Mypage = (props) => {
  const { userName, user, likes, views } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const userId = props.match.params.userId;

  useEffect(() => {
    dispatch(getMypage({ user: userId }));
  }, [dispatch, userId]);

  const likeItems = likes
    ? likes.length > 0
      ? likes.map((item, index) => {
          return (
            <Col span={8} key={item._id}>
              <Card key={index} title={item.title}>
                <Link to={`/goods/${item._id}`}>
                  <img
                    src={`http://localhost:7000/${item.images}`}
                    width="100px"
                    alt={item.title}
                  />
                </Link>
              </Card>
            </Col>
          );
        })
      : []
    : [];

  const viewItems = remove_Dup(views).map((item, index) => {
    return (
      <Col span={8}>
        <Card key={index} title={item.title}>
          <Link to={`/goods/${item._id}`}>
            <img
              src={`http://localhost:7000/${item.images}`}
              height="100px"
              alt={item.title}
            />
          </Link>
        </Card>
      </Col>
    );
  });

  function remove_Dup(arr) {
    var uniques = [];
    var items = [];
    for (var i = 0, l = arr.length; i < l; i++) {
      var stringified = JSON.stringify(arr[i]);
      if (items[stringified]) {
        continue;
      }
      uniques.push(arr[i]);
      items[stringified] = true;
    }
    return uniques;
  }

  return (
    <Page>
      <Helmet title={`????????? - ${userName}?????? ???????????????`} />
      <Background>
        <GoodsNavbar />
        <Fade bottom>
          <Box>
            <Profile>
              <div>???? {userName} ?????? ?????????</div>
              <div>
                <p>
                  <b>?????????</b> : {String(user.register_date).substring(0, 4)}???{' '}
                  {String(user.register_date).substring(5, 7)}???{' '}
                  {String(user.register_date).substring(8, 10)}???
                </p>
                <p>
                  <b>??????</b> : {user.address}
                </p>
                <p>
                  <b>?????????</b> : {userName}
                </p>
              </div>
              <BtnContainer>
                <Link to={`/goods/${userId}/mypage/edit`}>
                  <Btn>????????? ??????</Btn>
                </Link>
                <ChangepwModal />
              </BtnContainer>
            </Profile>
            <UserBox>
              <Cardarea>
                <p>?????? ?????? ??? ??????</p>
                <Row gutter={16}>{viewItems}</Row>
              </Cardarea>
              <Cardarea>
                <p>?????? ????????? ????????? ??????</p>
                <Row gutter={16}>{likeItems}</Row>
              </Cardarea>
            </UserBox>
          </Box>
        </Fade>
      </Background>
    </Page>
  );
};

export default Mypage;
