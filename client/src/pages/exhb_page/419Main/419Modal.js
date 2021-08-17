import React, { useState } from 'react';
import { BoxWhite, Date, Desc } from './styles';
import { Modal, Button } from 'antd';

const FourModal = (props) => {
  const [visible, setVisible] = useState(false);

  const ModalToggle = () => {
    setVisible(!visible);
  };

  const ModalData = () => {};

  return (
    <div>
      <BoxWhite type="button" onClick={ModalToggle} />
      <Modal
        visible={visible}
        onCancel={ModalToggle}
        footer={[
          <Button key="back" onClick={ModalToggle}>
            뒤로가기
          </Button>,
        ]}
      >
        {ModalData}
      </Modal>
    </div>
  );
};

export default FourModal;
