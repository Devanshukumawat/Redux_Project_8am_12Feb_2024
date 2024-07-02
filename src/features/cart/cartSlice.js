import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
    addtoCart : (state,actions)=>{
        console.log(actions.payload)
        state.cart.push(actions.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addtoCart } = cartSlice.actions

export default cartSlice.reducer