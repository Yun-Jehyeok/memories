import React, { useState, useCallback } from 'react';
import { Modal, Form, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { loginAction } from 'redux/actions';
import { Link } from 'react-router-dom';

function LoginModal() {
  ///////////////////////////////////////////
  // Modal Setting
  const [signInVisible, setSignInVisible] = useState(false);

  const showSignInModal = () => {
    setSignInVisible(true);
  };
  const handleSignInCancel = () => {
    setSignInVisible(false);
  };

  ///////////////////////////////////////////
  // Login Setting
  // if modal closed, the values will be reset
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 작동 안함
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { email, password } = form;
      const user = { email, password };

      dispatch(loginAction(user));
    },
    [form, dispatch],
  );

  return (
    <div style={{ display: 'inline-block' }}>
      <div
        onClick={showSignInModal}
        style={{ cursor: 'pointer' }}
        className="nav-item nav-border"
      >
        LOGIN
      </div>
      <Modal visible={signInVisible} onCancel={handleSignInCancel} footer="">
        <h2>LOGIN</h2>
        <div>
          <Form onSubmit={onSubmit}>
            <div>
              <Form.Item label="Email" style={{ marginBottom: '0px' }}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item label="Password">
                <Input.Password
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={onChange}
                />
              </Form.Item>

              <Button
                type="primary"
                style={{ width: '100%' }}
                onClick={onSubmit}
              >
                Sign In
              </Button>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <span>Not a member?&nbsp;&nbsp;</span>
              <span>
                <Link
                  to="/signup"
                  onClick={handleSignInCancel}
                  style={{ textDecoration: 'none' }}
                >
                  Register
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
