import { loadUserAction } from 'redux/actions';
import store from 'store';

const loadUser = () => {
  try {
    store.dispatch(loadUserAction(localStorage.getItem('token')));
  } catch (e) {
    console.log(e);
  }
};

export default loadUser;
