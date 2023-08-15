import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        address: '',
        phone: '',
        email: '',
        motto: '',
        photo: '',
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearUser: (state) => {
            return {
                name: '',
                address: '',
                phone: '',
                email: '',
                motto: '',
                photo: '',
            };
        },
    },
});

const tabSlice = createSlice({
    name: 'tab',
    initialState: 0,
    reducers: {
        setActiveTab: (state, action) => action.payload,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const { setActiveTab } = tabSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        activeTabIndex: tabSlice.reducer,
    },
});

export default store;
