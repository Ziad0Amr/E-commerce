import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Product"
import UserSlice from './User'

export const store = configureStore({
    reducer:{
        products:ProductSlice,
        User:UserSlice,
    }
})