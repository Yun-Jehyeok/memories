import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';

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

import { editProfile } from 'redux/actions';

const ProfileEdit = (props) => {
  const { userName, address } = useSelector((state) => state.auth);
  const userId = props.match.params.userId;

  const [form, setValues] = useState({
    name: `${userName}`,
    address: `${address}`,
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    await e.preventDefault();

    const { name, address } = form;
    const token = localStorage.getItem('token');
    const body = { name, address, token, userId };
    console.log(body);
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
                    <b>가입일</b> : {}
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

export default ProfileEdit;
