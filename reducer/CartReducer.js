import { CartAction } from "../Acton";

const initialState = {
  cart: {},
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartAction.types.GET_CART_ITEMS:
      return {...state, cart: action?.payload};
    case CartAction.types.SET_IS_LOADING:
      return {...state, isLoading: action?.payload};
    default:
      return state;
  }
};

export default cartReducer