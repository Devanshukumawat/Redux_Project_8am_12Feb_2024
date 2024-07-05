import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
    addtoCart : (state,actions)=>{
      const find = state.cart.findIndex((value)=>value.id===actions.payload.id)
      if(find !== -1){
        state.cart[find] = {...state.cart[find],quantity:state.cart[find].quantity+1}
      }else{
        state.cart.push({...actions.payload,quantity:1})
      }

    },

    deleteCart:(state,actions)=>{
      state.cart = state.cart.filter((value)=>value.id !== actions.payload.id)
    },

    removeAllCart : (state)=>{
      state.cart = []
    }

  }
})

// Action creators are generated for each case reducer function
export const { addtoCart , deleteCart , removeAllCart } = cartSlice.actions

export default cartSlice.reducer