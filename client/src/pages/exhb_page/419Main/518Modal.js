import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Modal } from 'antd';

import Fade from 'react-reveal/Fade';
import { IconBox, Item, ItemContainer, ModalBox } from './styles';
import {
  FrownOutlined,
  HeartOutlined,
  MehOutlined,
  RobotOutlined,
} from '@ant-design/icons';

import { dataFor419 } from './419data';
import { dataForVet } from './vetdata';
import { dataFor2000 } from './2000data';
import { dataFor625 } from './625data';
import { dataFor518 } from './518data';

function FiveModal() {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [ItemDetail, setItemDetail] = useState({
    image: '',
    title: '',
    description: '',
  });

  /////////////////////////////////////

  const { exhibitionId } = useParams();
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    switch (exhibitionId) {
      case '419main':
        setDataArr(dataFor419);
        return;
      case 'vet_page':
        setDataArr(dataForVet);
        return;
      case 'thousand_page':
        setDataArr(dataFor2000);
        return;
      case '625main':
        setDataArr(dataFor625);
        return;
      case '518Main':
        setDataArr(dataFor518);

      default:
        return;
    }
  }, [exhibitionId]);

  /////////////////////////////////////

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
  const Items = dataArr.map((item) => (
    <Item key={item.id} onClick={() => showModal(item)}>
      <Fade bottom>
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div>
          <h4 style={{ textAlign: 'center', marginTop: '16px' }}>
            {item.title}
          </h4>
          <div>{item.description.slice(0, 176)}...</div>
        </div>
      </Fade>
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
            <img src={ItemDetail.image} alt={ItemDetail.title} />
            <IconBox>
              <HeartOutlined />
              <RobotOutlined />
              <FrownOutlined />
              <MehOutlined />
            </IconBox>
          </div>
          <div>
            <b>{ItemDetail.title}</b>
            <p>{ItemDetail.description}</p>
          </div>
        </ModalBox>
      </Modal>
    </ItemContainer>
  );
}

export default FiveModal;
