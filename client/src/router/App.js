import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import GoodsMain from '../pages/GoodsMain';
import GoodsCollections from 'src/pages/GoodsCollections';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const page = ['collections'];
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/goods" exact component={GoodsMain} />
      <Route
        path="/goods/collections"
        render={() => <GoodsCollections page={page[0]} />}
      />
    </Switch>
  );
};

export default App;
