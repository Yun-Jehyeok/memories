import React, { createElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import Comment from 'components/comment/Comment';

import { Button } from 'antd';
// icons //
import { HeartFilled, HeartOutlined, EyeOutlined } from '@ant-design/icons';

import { Box, DescriptionBox, PageLink, RightCircle } from './styles';
import { Page } from 'assets/commonStyle/styles';

import {
  addToCartRequest,
  getGoodsDetail,
  upLikeAction,
  unLikeAction,
} from 'redux/actions';
import {
  COMMENT_DELETE_REQUEST,
  GET_VIEWS_REQUEST,
  UPVIEWS_REQUEST,
} from 'redux/types';
import SharingModal from 'components/SharingModal/SharingModal';

const GoodsDetail = (props) => {
  const [DescriptionButtonClick, setDescriptionButtonClick] = useState(true);
  const [likes, setLikes] = useState(0); // 모든 사용자
  const [action, setAction] = useState(''); // 로그인한 사용자가

  const { comments } = useSelector((state) => state.comment);
  const { userId, userName } = useSelector((state) => state.auth);
  const { images, title, price, description, views } = useSelector(
    (state) => state.post,
  );

  const goodsId = props.match.params.goodsId;

  const dispatch = useDispatch();

  const DescriptionClick = () => {
    setDescriptionButtonClick(true);
  };
  const CommentClick = () => {
    setDescriptionButtonClick(false);
  };

  const body = {
    userId: userId,
    productId: goodsId,
  };

  // 좋아요 기능 - 리덕스로 수정 //
  const onLikeClick = () => {
    if (userId === '') {
      alert('로그인을 하세요.');
    } else if (action === '') {
      try {
        dispatch(upLikeAction(body));
      } catch (e) {
        alert(e);
      }
      setAction('liked');
      setLikes((prev) => prev + 1);
      alert('좋아요를 눌렀습니다.');
    } else if (action === 'liked') {
      try {
        dispatch(unLikeAction(body));
      } catch (e) {
        alert(e);
      }
      setAction('');
      setLikes((prev) => prev - 1);
      alert('좋아요가 취소되었습니다.');
    }
  };

  useEffect(() => {
    dispatch(getGoodsDetail(goodsId));
    dispatch({
      type: UPVIEWS_REQUEST,
      payload: body,
    });
    dispatch({
      type: GET_VIEWS_REQUEST,
      payload: body,
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
  }, [goodsId, userId, dispatch]);

  const addToCartHandler = () => {
    const data = {
      goodsId: goodsId,
      userId: userId,
    };

    dispatch(addToCartRequest(data));
  };

  const onCommentDeleteClick = (commentId) => {
    dispatch({
      type: COMMENT_DELETE_REQUEST,
      payload: {
        userId: userId,
        commentId: commentId,
        postId: goodsId,
        token: localStorage.getItem('token'),
      },
    });
  };

  return (
    <Page>
      {GoodsNavbar(props.page)}
      <DescriptionBox>
        <Box>
          <div style={{ marginRight: '5%', width: '340px' }}>
            <img
              src={`http://localhost:7000/${images[0]}`}
              style={{ width: '340px', height: '340px' }}
              alt="productImage"
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
                <SharingModal goodsId={goodsId} />
              </span>
              <span style={{ marginLeft: '50px' }}>
                <EyeOutlined /> {views}명
              </span>
            </div>
          </div>
          {/* description */}
          <div style={{ marginRight: '5%', width: '620px', height: '100%' }}>
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
            {DescriptionButtonClick ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                  <b>상품명 : {title}</b>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <b>가격 : </b>
                  {price}원
                </div>
                {description}
                <br />
                <div
                  style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    type="primary"
                    style={{ marginRight: '10px' }}
                    onClick={addToCartHandler}
                  >
                    장바구니에 담기
                  </Button>
                  <Button type="primary">구매하기</Button>
                </div>
              </div>
            ) : (
              <div>
                <div
                  id="comment-scroll"
                  style={{
                    width: '640px',
                    height: '200px',
                    overflowY: 'scroll',
                    padding: '16px',
                  }}
                >
                  {comments.length > 0 ? (
                    comments.map(
                      ({ contents, creator, date, _id, creatorName }) => (
                        <div key={_id} style={{ marginBottom: '16px' }}>
                          <div>
                            <div style={{ fontSize: '1.1rem' }}>
                              <b>{creatorName ? creatorName : creator}</b>
                              &nbsp;•
                              <span
                                style={{ color: 'gray', fontSize: '0.8em' }}
                              >
                                &nbsp;{date}
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div>{contents}</div>
                            </div>
                            {creator === userId && userId ? (
                              <div>
                                <span
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => onCommentDeleteClick(_id)}
                                >
                                  삭제
                                </span>
                              </div>
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      ),
                    )
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        lineHeight: '150px',
                      }}
                    >
                      아직 작성된 댓글이 없습니다
                    </div>
                  )}
                </div>
                <Comment id={goodsId} userId={userId} userName={userName} />
              </div>
            )}
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
