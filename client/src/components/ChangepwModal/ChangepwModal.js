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

    if (window.confirm('비밀번호를 변경하시겠습니까?') === true) {
      dispatch(changePassword(ChangeUser));
      setModalInVisible(false);
    } else {
      return false;
    }
  };

  return (
    <>
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

              <Form.Item label="Password" style={{ marginTop: '-16px' }}>
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
    </>
  );
};

export default ChangepwModal;
