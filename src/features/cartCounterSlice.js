import {createSlice} from '@reduxjs/toolkit'

export const cartCounterSlice = createSlice({
    name : "shoppingCounter",
    
    initialState : {
        cartCount : 1
    },

    reducers : {
        add : (state, action) => {
            state.cartCount += action.payload
        },
        minus : (state, action) => {
            state.cartCount -= action.payload
        },
        reset : state => {
            state.cartCount = 1
        }
    }
})

export const {add, minus, reset} = cartCounterSlice.actions

export default cartCounterSlice.reducer

export const selectCartCount = state => state.shoppingCounter.cartCount