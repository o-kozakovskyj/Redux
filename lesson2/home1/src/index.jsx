import store from './store';
import { addUser, delUser } from './users.actions';

const onHandleAdd = () => {
  store.dispatch(addUser({ id: 76, name: 'sarah' }));
};
document.querySelector('.btn__add').addEventListener('click', onHandleAdd);

const onHandleDel = () => {
  store.dispatch(delUser(76));
};
document.querySelector('.btn__del').addEventListener('click', onHandleDel);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
