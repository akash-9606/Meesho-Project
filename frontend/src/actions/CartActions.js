export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREMENT_QTY = 'INCREMENT_QTY';
export const DECREMENT_QTY = 'DECREMENT_QTY';
export const UPDATE_CART_COUNT="UPDATE_CART_COUNT"

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const incrementQty = (productId) => {
  return {
    type: INCREMENT_QTY,
    payload: productId,
  };
};

export const decrementQty = (productId) => {
  return {
    type: DECREMENT_QTY,
    payload: productId,
  };
};

export const updateCartCount = (cartCount) => {
  return {
    type: 'UPDATE_CART_COUNT',
    payload: {cartCount}
  };
};