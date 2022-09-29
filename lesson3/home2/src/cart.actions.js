export const ADDPRODUCT = 'CART/ADDPRODUCT';
export const REMOVEPRODUCT = 'CART/REMOVEPRODUCT';

export const addProduct = product => ({
  type: ADDPRODUCT,
  payload: {
    product,
  },
});
export const removeProduct = productId => ({
  type: REMOVEPRODUCT,
  payload: {
    productId,
  },
});
