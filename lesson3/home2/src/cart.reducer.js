import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  productsList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_PRODUCT: {
      return state.productsList.concat(action.payload.product);
    }

    case REMOVE_PRODUCT: {
      const newProductsList = state.productsList.filter(
        product => product.id !== action.payload.productId,
      );
      return {
        ...state,
        productsList: newProductsList,
      };
    }
  }
};

export default cartReducer;
