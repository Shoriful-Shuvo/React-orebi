import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    cartProduct:[]
}
export const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCart:(state, action)=>{
            const isfound = state.cartProduct.findIndex((item)=>
                item.id==action.payload.id)
            if (isfound != -1 )
            {
                state.cartProduct[isfound].qtn+=1;
            }
            else
            {
                state.cartProduct.push(action.payload) 

            }
        },
        removeCart:(state,action)=>{
            state.cartProduct= state.cartProduct.filter(item => item.id !== action.payload.id);
        },
        increment:(state,action)=>{
            qtn=+1;
        },
    },
}) ;
export const {addCart,removeCart,increment} =cartslice.actions;
export default cartslice.reducer;