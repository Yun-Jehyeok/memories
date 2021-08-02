import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import GoodsMain from '../pages/GoodsMain';
import GoodsCollections from 'src/pages/GoodsCollections';
import Shopping from 'src/pages/Shopping';
import GoodsDonation from 'src/pages/GoodsDonation';

import 'bootstrap/dist/css/bootstrap.min.css';
import UploadProduct from 'src/pages/UploadProduct/UploadProduct';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/goods" exact component={GoodsMain} />
      <Route path="/goods/:goodsId" component={GoodsCollections} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/donation" exact component={GoodsDonation} />
      <Route path="/product/upload" component={UploadProduct} />
    </Switch>
  );
};

export default App;
