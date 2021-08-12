import React, { createElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';

import { Button } from 'antd';
// icons //
import {
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import { Box, DescriptionBox, PageLink, RightCircle } from './styles';
import { Page } from 'assets/commonStyle/styles';

const GoodsDetail = (props) => {
  const [Product, setProduct] = useState([]);
  const [DescriptionButtonClick, setDescriptionButtonClick] = useState(true);
  const [likes, setLikes] = useState(0); // 모든 사용자
  const [action, setAction] = useState(''); // 로그인한 사용자가

  const { userId } = useSelector((state) => state.auth);

  const goodsId = props.match.params.goodsId;

  const DescriptionClick = () => {
    setDescriptionButtonClick(true);
  };
  const CommentClick = () => {
    setDescriptionButtonClick(false);
  };

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
      <DescriptionBox>
        <Box>
          <div>
            <div style={{ marginRight: '10%' }}>
              <img
                src={`http://localhost:7000/${Product.images}`}
                style={{ width: '50vh', height: '50vh' }}
              />

              {/* Like, Share */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10px',
                }}
              >
                <span style={{ marginRight: '10px' }}>
                  <span
                    onClick={onLikeClick}
                    style={{
                      cursor: 'pointer',
                      marginRight: '5px',
                    }}
                  >
                    {createElement(
                      action === 'liked' ? HeartFilled : HeartOutlined,
                    )}
                  </span>
                  {likes}명
                </span>
                <span>
                  <ShareAltOutlined style={{ marginRight: '5px' }} />
                  공유하기
                </span>
              </div>
            </div>
            {/* description */}
            <div style={{ marginRight: '10%' }}>
              <div
                style={{
                  marginBottom: '10px',
                }}
              >
                <Button
                  type={DescriptionButtonClick ? 'primary' : 'default'}
                  style={{ width: '100px', marginRight: '5px' }}
                  onClick={DescriptionClick}
                >
                  상품 설명
                </Button>
                <Button
                  type={DescriptionButtonClick ? 'default' : 'primary'}
                  style={{ width: '100px' }}
                  onClick={CommentClick}
                >
                  후기
                </Button>
              </div>
              <div style={{ fontSize: '1.5rem' }}>
                <b>상품명 : {Product.title}</b>
              </div>
              <br />
              {Product.description}
              <br />
              <div
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button type="primary" style={{ marginRight: '10px' }}>
                  장바구니에 담기
                </Button>
                <Button type="primary">구매하기</Button>
              </div>
            </div>
          </div>
        </Box>
        <PageLink>
          <Link to="/goods" className="LinkItem">
            <span>다른 굿즈 보기</span>
            <RightCircle />
          </Link>
        </PageLink>
      </DescriptionBox>
    </Page>
  );
};

export default GoodsDetail;
