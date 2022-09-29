import { ADDPRODUCT, REMOVEPRODUCT } from './cart.actions';

const initialState = {
  productsList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADDPRODUCT: {
      return {
        ...state,
        productsList: state.productsList.concat(action.payload.product),
      };
    }

    case REMOVEPRODUCT: {
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
