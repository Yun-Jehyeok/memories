import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Logo } from 'assets/commonStyle/styles';
import { registerAction } from 'redux/actions';
import SignupCheck from './SignupCheck';
import { FormContainer, SignUpContainer, Wrap } from './style';
import { Button, Form, Input } from 'antd';

const Signup = () => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [conditions, setConditions] = useState(false);
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { name, email, password, passwordCheck } = form;

      if (password !== passwordCheck) {
        alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
      } else {
        const user = { name, email, password };

        dispatch(registerAction(user));
      }
    },
    [form, dispatch],
  );

  return (
    <div>
      <Logo />
      <SignUpContainer>
        <Wrap>
          {check ? (
            <FormContainer>
              <h1>REGISTER</h1>
              <Form onSubmit={onSubmit}>
                <Form.Item label="NAME" style={{ marginBottom: '0px' }}>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={onChange}
                  />
                </Form.Item>
                <Form.Item label="EMAIL" style={{ marginBottom: '0px' }}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={onChange}
                  />
                </Form.Item>

                <Form.Item label="PASSWORD" style={{ marginBottom: '0px' }}>
                  <Input.Password
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </Form.Item>

                <Form.Item label="PASSWORD CHECK">
                  <Input.Password
                    type="password"
                    name="passwordCheck"
                    id="passwordCheck"
                    placeholder="Password Check"
                    onChange={onChange}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: '100%' }}
                    type="primary"
                    onClick={onSubmit}
                  >
                    회원가입
                  </Button>
                </Form.Item>
              </Form>
            </FormContainer>
          ) : (
            <SignupCheck
              conditions={conditions}
              setConditions={setConditions}
              setCheck={setCheck}
            />
          )}
        </Wrap>
      </SignUpContainer>
    </div>
  );
};

export default Signup;
