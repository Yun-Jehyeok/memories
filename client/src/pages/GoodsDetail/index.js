import React, { createElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';

// icons //
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import { Box, PageHeader, BackgroundYellow, PageLink } from './styles';
import { Page } from 'src/assets/commonStyle/styles';

const GoodsDetail = (props) => {
  const [Product, setProduct] = useState([]);
  const goodsId = props.match.params.goodsId;
  const [likes, setLikes] = useState(0);
  const [action, setAction] = useState(null);

  const { userId } = useSelector((state) => state.auth);

  const onLikeClick = () => {
    const body = {
      userId: userId,
      productId: goodsId,
    };
    if (userId === null) {
      alert('로그인을 하세요.');
    } else if (action === null) {
      Axios.post(`/api/product/${goodsId}/like/uplike`, body).then((res) => {
        if (res.data.uplike) {
          setAction('liked');
          setLikes((prev) => prev + 1);
          alert('좋아요를 눌렀습니다.');
        } else {
          alert(res.data.err);
        }
      });
    } else if (action === 'liked') {
      Axios.post(`/api/product/${goodsId}/like/unlike`, body).then((res) => {
        if (res.data.unlike) {
          setAction(null);
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
          <img src={Product.images} />
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
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            style={{
              position: 'relative',
              color: '#000000',
              fontSize: '45px',
              marginLeft: '10px',
              top: '10px',
            }}
          />
        </Link>
      </PageLink>
    </Page>
  );
};

export default GoodsDetail;
