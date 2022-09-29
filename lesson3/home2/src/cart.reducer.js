import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    }
    case REMOVE_PRODUCT: {
      const newProducts = state.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        products: newProducts,
      };
    }
  }
};

export default cartReducer;
