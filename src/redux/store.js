import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';

const store = configureStore({
    reducer: {
        goods: goodsReducer,    
    },
});

export default store;
