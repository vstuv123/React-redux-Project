import { createSlice } from "@reduxjs/toolkit";

const bagCartSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers:{
        addToBag: (state, action) =>{
            state.push(action.payload)
        },
        removeFromBag: (state, action) =>{
            return state.filter((itemId) => itemId !== action.payload)
        }
    }
})

export const bagCartActions = bagCartSlice.actions
export default bagCartSlice;
