import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

interface IAuthState {
    username: string;
    email: string;
    token: string;
}

const initialState: IAuthState = {
    username: '',
    email: '',
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectToken: (state) => state.token
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
            console.log('Our token', payload);

            state.username = payload.username;
            state.email = payload.email;
            state.token = payload.token;
        });

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            console.log('Our token', payload);

            state.username = payload.username;
            state.email = payload.email;
            state.token = payload.token;
        });
    }
});

export const { selectToken } = authSlice.selectors;

export const authReducer = authSlice.reducer;
