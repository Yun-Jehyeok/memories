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
    </Switch>
  );
};

export default App;
