import { createSlice } from '@reduxjs/toolkit';
import {itemsList} from "../../data/mock-items-data";

const itemsListSlice = createSlice({
    name: 'items',
    initialState: {
        itemsList: itemsList,
        currentItemID: null,
    },
    reducers: {
        // addItem: (state, action) => {
        //     state.itemList.push(action.payload);
        // },
        // removeItem: (state, action) => {
        //     state.itemList = state.itemList.filter(item => item.id !== action.payload);
        // },
        // setCurrentItemID: (state, action) => {
        //     state.currentItem = action.payload;
        // },
    },
});

export const { reducer: itemsListReducer, actions: itemsListActions } = itemsListSlice