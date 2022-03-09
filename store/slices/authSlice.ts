import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentUser {
    id: string;
    display_name: string;
    email: string;
    photo_url: string;
}

export interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    currentUser?: CurrentUser;
    error: boolean;
}

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: false,
};

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setAuthSuccess: (state, { payload }: PayloadAction<CurrentUser>) => {
            state.currentUser = payload;
            state.isAuth = true;
        },
        setLogOut: (state) => {
            state.isAuth = false;
            state.currentUser = undefined;
        },
    },
});

export const { setLoading, setAuthSuccess, setLogOut } = counterSlice.actions;

export default counterSlice.reducer;
