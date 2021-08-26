import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from 'hoc/auth';

import Main from 'pages/Main';
import Signup from 'pages/Signup';
import GoodsMain from 'pages/GoodsMain';
import GoodsDetail from 'pages/GoodsDetail';
import Cart from 'pages/Cart';
import GoodsDonation from 'pages/GoodsDonation';
import five_page from 'pages/exhb_page/518Main';
import four_page from 'pages/exhb_page/419Main';
import six_page from 'pages/exhb_page/625Main';
import jap_page from 'pages/exhb_page/JapMain';
import thousand_page from 'pages/exhb_page/2000Main';
import vet_page from 'pages/exhb_page/vetMain';
import UploadProduct from 'pages/UploadGoods/UploadGoods';
import Mypage from 'pages/Mypage';
import ProfileEdit from 'pages/Mypage/ProfileEdit';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // 메인페이지는 인증이 아예 필요 없기 때문에 추가하지 않음
  // true / 인증된 사용자만 접근 가능
  // false / 인증되지 않은 사용자만 접근 가능
  // null / 인증 상관 없음

  return (
    <Switch>
      {/* 메인 페이지 */}
      <Route path="/" exact component={Main} />
      <Route path="/:exhibtionId/exhibitDetail" component={four_page} />

      {/* 굿즈 페이지 */}
      <Route path="/signup" exact component={Signup} />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/cart" exact component={Cart} />
      <Route path="/goods/donation" exact component={GoodsDonation} />
      <Route path="/goods/upload" exact component={UploadProduct} />
      <Route path="/goods/:goodsId" exact component={GoodsDetail} />
      <Route path="/goods/:userId/mypage" exact component={Mypage} />
      <Route path="/goods/:userId/mypage/edit" exact component={ProfileEdit} />
    </Switch>
  );
};

export default App;
