import {configureStore} from "@reduxjs/toolkit";
import { userAPI } from "./api/userApi";

export const server = "http://localhost:4000";

export const store =configureStore({
    reducer:{
        [ userAPI.reducerPath ] : userAPI.reducer,

    },
    middleware: (mid)=>[...mid(),userAPI.middleware],
})