import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from 'hoc/auth';

import Login from 'pages/Login';
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
      <Route path="/518main" exact component={five_page} />
      <Route path="/419main" exact component={four_page} />
      <Route path="/625main" exact component={six_page} />
      <Route path="/jap_page" exact component={jap_page} />
      <Route path="/thousand_page" exact component={thousand_page} />
      <Route path="/vet_page" exact component={vet_page} />

      {/* 굿즈 페이지 */}
      <Route path="/login" exact component={Auth(Login, false)} />
      <Route path="/signup" exact component={Auth(Signup, false)} />
      <Route path="/goods" exact component={Auth(GoodsMain, null)} />
      <Route path="/goods/cart" exact component={Auth(Cart, true)} />
      <Route
        path="/goods/donation"
        exact
        component={Auth(GoodsDonation, null)}
      />
      <Route path="/goods/upload" exact component={Auth(UploadProduct, true)} />
      <Route path="/goods/:goodsId" exact component={Auth(GoodsDetail, null)} />
      <Route
        path="/goods/:userId/mypage"
        exact
        component={Auth(Mypage, true)}
      />
    </Switch>
  );
};

export default App;
