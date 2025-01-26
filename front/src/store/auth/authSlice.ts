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
        selectUsername: (state) => state.username,
        selectEmail: (state) => state.email,
        selectToken: (state) => state.token
    },
    reducers: {
        clearReducer: (state) => {
            state.token = '';
        }
    },
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

export const { clearReducer } = authSlice.actions;

export const { selectUsername, selectEmail, selectToken } = authSlice.selectors;

export const authReducer = authSlice.reducer;
