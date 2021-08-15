import { loadUserAction } from 'redux/actions';
import store from 'store';

const loadUser = () => {
  try {
    store.dispatch(loadUserAction());
  } catch (e) {
    console.log(e);
  }
};

export default loadUser;
