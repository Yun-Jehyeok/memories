import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from 'pages/Main';
import Signup from 'pages/Signup';
import GoodsMain from 'pages/GoodsMain';
import GoodsDetail from 'pages/GoodsDetail';
import Cart from 'pages/Cart';
import GoodsDonation from 'pages/GoodsDonation';
import ExhibitDetail from 'pages/exhb_page/419Main';
import UploadProduct from 'pages/UploadGoods/UploadGoods';
import Mypage from 'pages/Mypage';
import ProfileEdit from 'pages/Mypage/ProfileEdit';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // 메인페이지는 인증이 아예 필요 없기 때문에 추가하지 않음
  // true / 인증된 사용자만 접근 가능
  // false / 인증되지 않은 사용자만 접근 가능
  // null / 인증 상관 없음

  const { isProfileChange } = useSelector((state) => state.auth);
  return (
    <Switch>
      {/* 메인 페이지 */}
      <Route path="/" exact component={Main} />
      <Route
        path="/exhibitDetail/:exhibitionId"
        render={() => <ExhibitDetail />}
      />

      {/* 굿즈 페이지 */}
      <Route path="/signup" exact component={Signup} />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/cart" exact component={Cart} />
      <Route path="/goods/donation" exact component={GoodsDonation} />
      <Route path="/goods/upload" exact component={UploadProduct} />
      <Route path="/goods/:goodsId" exact component={GoodsDetail} />
      <Route path="/goods/:userId/mypage" exact component={Mypage} />
      <Route
        path="/goods/:userId/mypage/edit"
        exact
        render={() =>
          isProfileChange ? (
            <Redirect to="/goods/:userId/mypage" />
          ) : (
            <ProfileEdit />
          )
        }
      />
    </Switch>
  );
};

export default App;
