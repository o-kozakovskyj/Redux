import { EN, ES, JP, SetLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import store from './store';

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(SetLanguage(JP));
store.dispatch(SetLanguage(EN));
store.dispatch(SetLanguage(ES));

store.dispatch(addProduct({ id: 1, name: 'TV' }));
store.dispatch(addProduct({ id: 2, name: 'BBQ' }));
store.dispatch(removeProduct(1));
