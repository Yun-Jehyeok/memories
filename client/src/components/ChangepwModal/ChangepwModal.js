import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'redux/actions';

import { Modal, Form, Button, Input } from 'antd';
import { Btn } from 'assets/commonStyle/styles';

const ChangepwModal = () => {
  // Modal Setting //
  const [modalInVisible, setModalInVisible] = useState(false);

  const showModal = () => {
    setModalInVisible(!modalInVisible);
  };

  // Changepw Setting //
  const [form, setValue] = useState({
    email: '',
    password: '',
  });
  const { isPasswordChange } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const ChangeUser = { email, password };
    dispatch(changePassword(ChangeUser));
  };

  return (
    <>
      {isPasswordChange ? (
        <div className="text-dark">
          <div>비밀번호가 변경되었습니다.</div>
        </div>
      ) : (
        <span style={{ marginLeft: '30px' }}>
          <Btn onClick={showModal}>비밀번호 변경</Btn>
          <Modal visible={modalInVisible} onCancel={showModal} footer={null}>
            <h2>비밀번호 변경</h2>
            <div>
              <Form onSubmit={onSubmit}>
                <Form.Item label="Email">
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
                  저장
                </Button>
              </Form>
            </div>
          </Modal>
        </span>
      )}
    </>
  );
};

export default ChangepwModal;
