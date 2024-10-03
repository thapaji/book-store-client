import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    selectedNews: {},
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, { payload }) => {
            state.news = payload || [];
        },
        setSelectedNews: (state, { payload }) => {
            state.selectedNews = payload || {};
        }
    }
});

const { reducer, actions } = newsSlice;

export const { setNews, setSelectedNews } = actions;

export default reducer;