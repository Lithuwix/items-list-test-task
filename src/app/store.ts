import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './app-slice'
import {itemReducer} from "../features/item/item-slice";
import {itemsListReducer} from "../features/items-list/items-list-slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    item: itemReducer,
    itemsList: itemsListReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
