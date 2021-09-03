import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';

import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

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

import { editProfile, getMypage } from 'redux/actions';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
  const { userName, user, likes, views, userId } = useSelector(
    (state) => state.auth,
  );

  const [form, setValues] = useState({
    name: `${userName}`,
    address: `${user.address ? user.address : 'No Address'}`,
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMypage({ user: userId }));
  }, [user]);

  const likeItems = likes.map((item, index) => {
    return (
      <Col span={8} key={item._id}>
        <Card key={index} title={item.title}>
          <Link to={`/goods/${item._id}`}>
            <img src={`http://localhost:7000/${item.images}`} width="100px" />
          </Link>
        </Card>
      </Col>
    );
  });

  const viewItems = remove_Dup(views).map((item, index) => {
    return (
      <Col span={8}>
        <Card key={index} title={item.title}>
          <Link to={`/goods/${item._id}`}>
            <img src={`http://localhost:7000/${item.images}`} width="100px" />
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

  const onSubmit = async (e) => {
    await e.preventDefault();

    const { name, address } = form;
    const userId = user._id;
    const body = { name, address, userId };

    dispatch(editProfile(body));
  };

  return (
    <Page>
      <Helmet title={`기억들 - ${userName}님의 마이페이지`} />
      <Background>
        <GoodsNavbar />
        <Box>
          <Profile>
            <div>🌸 {userName} 님의 프로필</div>
            <div>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <p>
                    <b>가입일</b> :{' '}
                    {String(user.register_date).substring(0, 10)}
                  </p>
                </FormGroup>
                <FormGroup>
                  <p>
                    <b>주소</b> :
                    <Input
                      defaultValue={form.address}
                      type="text"
                      name="address"
                      id="address"
                      className="form-control"
                      onChange={onChange}
                    />
                  </p>
                </FormGroup>
                <FormGroup>
                  <p>
                    <b>닉네임</b> :
                    <Input
                      defaultValue={form.name}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      onChange={onChange}
                    />
                  </p>
                </FormGroup>
                <BtnContainer>
                  <Btn type="submit" style={{ marginTop: '-50px' }}>
                    저장
                  </Btn>
                </BtnContainer>
              </Form>
            </div>
          </Profile>
          <UserBox>
            <Cardarea>
              <p>✔️ 최근 본 상품</p>
              <Row gutter={16}>{viewItems}</Row>
            </Cardarea>
            <Cardarea>
              <p>✔️ 마음에 들어한 상품</p>
              <Row gutter={16}>{likeItems}</Row>
            </Cardarea>
          </UserBox>
        </Box>
      </Background>
    </Page>
  );
};

export default ProfileEdit;
