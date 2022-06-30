import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  };
  
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        // add(state, action) {
        //     state.cartItems.push(action.payload);
        // },
          add(state, action) {
            let existingIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (existingIndex >= 0) {
              state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
              };
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProductItem);
              
            };
          },

        remove(state, action) {
          return state.cartItems.filter((item) => item.id !== action.payload.id);
        },



        







        
        sumTotal(state) {
            return state.reduce((amount, item) => item.price + amount, 0);
        },
        
        
    },
});

export const { add, remove, sumTotal} = cartSlice.actions;
export default cartSlice.reducer;


