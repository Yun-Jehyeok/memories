import React, { useState } from 'react';

import { Modal } from 'antd';
import {
  ShareAltOutlined,
  FacebookFilled,
  TwitterOutlined,
} from '@ant-design/icons';
import KakaoIcon from 'assets/img/icons/icon-kakao.png';
import useScript from 'hooks/useScript';

const SharingModal = (props) => {
  // 공유하기 모달 //
  const [isModalVisible, setIsModalVisible] = useState(false);

  useScript(`https://developers.kakao.com/sdk/js/kakao.js`);

  const onClickModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // 배포후 공유 url 수정 필요 //
  const shareTwitter = () => {
    const text = '기억들';
    const url = `http://localhost:3000/goods/${props.goodsId}`;
    window.open(
      'https://twitter.com/intent/tweet?text=' + text + '&url=' + url,
    );
  };

  const shareFacebook = () => {
    const url = `http://localhost:3000/goods/${props.goodsId}`;
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
  };

  const shareKakaoTalk = () => {
    // Kakao.init('29f89f1de4df628a5ccb127d00bcdd8b');
    // Kakao.Link.createDefaultButton({
    //   container: '#btnKakao',
    //   objectType: 'feed',
    //   content: {
    //     title: '기억들', // 보여질 제목
    //     description: '기억들 입니다.', // 보여질 설명
    //     imageUrl: 'http://localhost:3000/goods/611102f8bb786c072f9a6586',
    //     link: {
    //       webUrl: 'http://localhost:3000/goods/611102f8bb786c072f9a6586',
    //     },
    //   },
    // });
  };

  return (
    <p>
      <span
        onClick={onClickModal}
        style={{
          cursor: 'pointer',
        }}
      >
        <ShareAltOutlined style={{ marginRight: '5px' }} />
        공유하기
      </span>
      <Modal
        title="공유"
        visible={isModalVisible}
        onCancel={onClickModal}
        footer={null}
        width={220}
      >
        <p
          onClick={shareFacebook}
          style={{
            cursor: 'pointer',
          }}
        >
          <FacebookFilled style={{ fontSize: '35px', color: '#3B579D' }} />
          &nbsp;facebook
        </p>
        <p
          onClick={shareTwitter}
          style={{
            cursor: 'pointer',
          }}
        >
          <TwitterOutlined style={{ fontSize: '35px', color: '#2CAAE1' }} />
          &nbsp;twitter
        </p>
        <p>
          <img src={KakaoIcon} style={{ width: '35px' }} alt="kakao imoticon" />
          &nbsp;kakao talk
        </p>
      </Modal>
    </p>
  );
};

export default SharingModal;
