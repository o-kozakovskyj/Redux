import { en, es, jp } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(en());
store.dispatch(es());
store.dispatch(jp());

store.dispatch(addProduct({ id: 1, name: 'TV' }));
store.dispatch(addProduct({ id: 2, name: 'BBQ' }));
store.dispatch(removeProduct(1));
