import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState} from "./types";
import { Product } from "../../type";

const initialState: InitialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items = [...state.items, action.payload]
        },
        
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id != action.payload)
        },
        
        // NOTE: EXAMPLE ONLY
        // editTitleToCart: (state, action: PayloadAction<Product>) => {
        //     const result = [];
        //     for (const item of state.items) {
        //         if(item.id === action.payload.id) {
        //             result.push({
        //                 ...item,
        //                 title: action.payload.title,
        //             });
        //         }

        //         result.push(item);
        //     }

        //     state.items = [...result]
        // },
    }
})