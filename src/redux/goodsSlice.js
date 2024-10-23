import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('goodsList');
    return storedData ? JSON.parse(storedData) : [];
};

const saveToLocalStorage = (goodsList) => {
     localStorage.setItem('goodsList', JSON.stringify(goodsList));
};

const initialState = {
    goodsList: loadFromLocalStorage(),
    searchQuery: '',
};

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        addGoods: (state, action) => {
            state.goodsList.push(action.payload);
            saveToLocalStorage(state.goodsList);
        },
        editGoods: (state, action) => {
            const { id, newData } = action.payload;
            const index = state.goodsList.findIndex(item => item.id === id);
            if (index !== -1) state.goodsList[index] = { ...state.goodsList[index], ...newData };
            saveToLocalStorage(state.goodsList);
        },
        deleteGoods: (state, action) => {
            state.goodsList = state.goodsList.filter(item => item.id !== action.payload);
            saveToLocalStorage(state.goodsList);
        },
        searchGoods: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { addGoods, editGoods, deleteGoods, searchGoods } = goodsSlice.actions;
export default goodsSlice.reducer;
