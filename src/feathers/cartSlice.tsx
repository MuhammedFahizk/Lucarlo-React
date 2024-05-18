import { createSlice } from "@reduxjs/toolkit";
// import CartItems from "../component/CartItems";

const initialState = {
  CartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const calculateTotals = (state) => {
  state.cartTotalAmount = state.CartItems.reduce((total, item) => total + (item.cartQuantity * item.price), 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const itemIndex = state.CartItems.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
            state.CartItems[itemIndex].cartQuantity += 1
        } else {

      const tempProducts = { ...action.payload, cartQuantity: 1 };
      state.CartItems.push(tempProducts);
    state.cartTotalQuantity +=1

    }
    calculateTotals(state);

    },
    removeItem(state, action) {
      console.log(action.payload);
      
      state.CartItems = state.CartItems.filter((item) => item.id !== action.payload)
      calculateTotals(state);

    },
    decreaseItemQuantity(state, action) {
      const itemIndex = state.CartItems.findIndex((item) => item.id === action.payload.id);
      if (state.CartItems[itemIndex].cartQuantity > 1) {
        state.CartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.CartItems = state.CartItems.filter((item) => item.id !== action.payload.id);
      }      
      calculateTotals(state);

    }
  },
});

export const { addtoCart, removeItem, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
