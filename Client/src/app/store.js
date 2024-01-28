import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import loginReducer from '../features/loginSlice'

export const store=configureStore({
    reducer:{
        todo:todoReducer,
        login:loginReducer,
    },

})