import React, { createElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

// icons //
import {
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import {
  Box,
  PageHeader,
  BackgroundYellow,
  PageLink,
  RightCircle,
} from './styles';
import { Page } from 'assets/commonStyle/styles';

const GoodsDetail = (props) => {
  const [Product, setProduct] = useState([]);
  const goodsId = props.match.params.goodsId;
  const [likes, setLikes] = useState(0); // 모든 사용자
  const [action, setAction] = useState(''); // 로그인한 사용자가

  const { userId } = useSelector((state) => state.auth);

  const onLikeClick = () => {
    const body = {
      userId: userId,
      productId: goodsId,
    };

    if (userId === '') {
      alert('로그인을 하세요.');
    } else if (action === '') {
      Axios.post(`/api/product/${goodsId}/like/uplike`, body).then((res) => {
        if (res.data.upLike) {
          setAction('liked');
          setLikes((prev) => prev + 1);
          alert('좋아요를 눌렀습니다.');
        } else {
          alert(res.data.err);
        }
      });
    } else if (action === 'liked') {
      Axios.post(`/api/product/${goodsId}/like/unlike`, body).then((res) => {
        if (res.data.unLike) {
          setAction('');
          setLikes((prev) => prev - 1);
          alert('좋아요가 취소되었습니다.');
        } else {
          alert(res.data.err);
        }
      });
    }
  };

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${goodsId}`).then((res) => {
      setProduct(res.data);
    });

    Axios.get(`api/product/${goodsId}/like/getLike`).then((res) => {
      // 좋아요가 있을 때
      if (res.data.getLike) {
        const all_like = res.data.likes;
        setLikes(all_like.length);
        all_like.map((like) => {
          if (like.userId === userId) {
            setAction('liked');
          }
        });
      } else {
        alert('데이터 오류');
      }
    });
  }, []);

  return (
    <Page>
      {GoodsNavbar(props.page)}
      <BackgroundYellow></BackgroundYellow>
      <PageHeader>
        <div>
          <p id="goodsTitle">{Product.title}</p>
        </div>
      </PageHeader>
      <Box>
        <div>
          <img
            src={`http://localhost:7000/${Product.images}`}
            style={{ width: '500px', height: '500px' }}
          />
          {/* description */}
          <p>
            상품 설명 : <br />
            {Product.description}
          </p>
          {/* Like, Share */}
          <p>
            <span>
              <span onClick={onLikeClick} style={{ cursor: 'pointer' }}>
                {createElement(
                  action === 'liked' ? HeartFilled : HeartOutlined,
                )}
              </span>
              {likes}명
            </span>
            <span>
              <ShareAltOutlined />
              공유하기
            </span>
          </p>
        </div>
      </Box>
      <PageLink>
        <Link to="/goods" className="LinkItem">
          <span>다른 굿즈 보기</span>
          <RightCircle />
        </Link>
      </PageLink>
    </Page>
  );
};

export default GoodsDetail;
