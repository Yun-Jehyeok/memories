import React, { useState } from 'react';
import { ButtonWhite, Date, Desc } from './styles';
import { Modal, Button } from 'antd';

const HistoryModal = (props) => {
  const [visible, setVisible] = useState(false);

  const ModalToggle = () => {
    setVisible(!visible);
  };

  const ModalData = props.printData.map((event, index) => {
    return (
      <p key={index}>
        <Date>
          {event.date.slice(5, 7)}월 {event.date.slice(8, 10)}일
        </Date>
        <Desc>{event.description}</Desc>
      </p>
    );
  });

  return (
    <div>
      {props.printData.length >= 10 ? (
        <div>
          <ButtonWhite type="button" onClick={ModalToggle}>
            ...더보기
          </ButtonWhite>
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default HistoryModal;
