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
              state.cartItems[existingIndex].cartQuantity += 1;
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProductItem);
            };
          },




          increase(state, action) {
            const tempIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id );
            state.cartItems[tempIndex].cartQuantity +=1;
          },





        //   remove (state, action) {
        //     const nextCart = state.cartItems.filter( (item) => {
        //         return item._id !== action.payload._id;
        //     });
        //     state.cartItems = nextCart;
        // },
        remove(state, action) {
          state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== cartItem.id
              );
    
              state.cartItems = nextCartItems;   
            }
            return state;
          });
        },



        getTotals(state) {
          let { cartTotalAmount, cartTotalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
              const { price, cartQuantity } = cartItem;
              const itemTotal = price * cartQuantity;
    
              cartTotal.cartTotalAmount += itemTotal;
              cartTotal.cartTotalQuantity += cartQuantity;
    
              return cartTotal;
            },
            {
              cartTotalAmount: 0,
              cartTotalQuantity: 0,
            }
          );
          state.cartTotalAmount=parseFloat(cartTotalAmount.toFixed(2))
          state.cartTotalQuantity=cartTotalQuantity

          // total = parseFloat(total.toFixed(2));
          // state.cartTotalQuantity = quantity;
          // state.cartTotalAmount = total;
        },





        decrease(state, action) {
          const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            
          } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
    
            state.cartItems = nextCartItems; 
            };
          }   
          
          



    },
});

export const { add, remove, decrease,increase,getTotals} = cartSlice.actions;
export default cartSlice.reducer;


