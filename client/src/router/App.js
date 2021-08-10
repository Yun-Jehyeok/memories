import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import GoodsMain from '../pages/GoodsMain';
import GoodsDetail from 'src/pages/GoodsDetail';
import Shopping from 'src/pages/Shopping';
import GoodsDonation from 'src/pages/GoodsDonation';
import five_page from 'src/pages/518Main';
import four_page from 'src/pages/419Main';
import six_page from 'src/pages/625Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import UploadProduct from 'src/pages/UploadGoods/UploadGoods';

const App = () => {
  const { isAuthenticated, userRole } = useSelector((state) => state.auth);

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route
        path="/login"
        exact
        render={() => (isAuthenticated ? <Redirect to="/goods" /> : <Login />)}
      />
      <Route
        path="/signup"
        exact
        render={() => (isAuthenticated ? <Redirect to="/goods" /> : <Signup />)}
      />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/shopping" exact component={Shopping} />
      <Route path="/goods/donation" exact component={GoodsDonation} />
      <Route path="/goods/upload" exact component={UploadProduct} />
      <Route path="/goods/:goodsId" exact component={GoodsDetail} />
      <Route path="/518main" exact component={five_page} />
      <Route path="/419main" exact component={four_page} />
      <Route path="/625main" exact component={six_page} />
    </Switch>
  );
};

export default App;
