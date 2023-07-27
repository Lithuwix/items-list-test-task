import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        currentItemInfo: {
            title: '',
            description: '',
            id: '',
            price: 0,
            picture: ''
        },
    },
    reducers: {
        setCurrentItem: (state, action) => {
            state.currentItemInfo = action.payload;
        },
    },
});

export const { reducer: itemReducer, actions: itemActions } = itemSlice