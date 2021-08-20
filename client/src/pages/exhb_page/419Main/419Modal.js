import React, { useState } from 'react';
import { Modal } from 'antd';
import { dummyArr } from './data';
import { IconBox, Item, ItemContainer, ModalBox } from './styles';
import {
  FrownOutlined,
  HeartOutlined,
  MehOutlined,
  RobotOutlined,
} from '@ant-design/icons';

function FourModal() {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [ItemDetail, setItemDetail] = useState({
    image: '',
    title: '',
    description: '',
  });

  const showModal = (item) => {
    setisModalVisible(true);
    setItemDetail({
      image: item.image,
      title: item.title,
      description: item.description,
    });
  };
  const handleOk = () => {
    setisModalVisible(false);
  };
  const handleCancel = () => {
    setisModalVisible(false);
  };
  const Items = dummyArr.map((item) => (
    <Item key={item.id} onClick={() => showModal(item)}>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <div>{item.description.slice(0, 176)}...</div>
      </div>
    </Item>
  ));

  return (
    <ItemContainer>
      {Items}
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
        width={800}
      >
        <ModalBox>
          <div>
            <img src={ItemDetail.image} />
            <IconBox>
              <HeartOutlined />
              <RobotOutlined />
              <FrownOutlined />
              <MehOutlined />
            </IconBox>
          </div>
          <div>
            <p style={{ fontSize: '20px' }}>
              <b>{ItemDetail.title}</b>
            </p>
            <p>{ItemDetail.description}</p>
          </div>
        </ModalBox>
      </Modal>
    </ItemContainer>
  );
}

export default FourModal;
