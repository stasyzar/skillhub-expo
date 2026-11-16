import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { secureStorage } from '@services/secureStorage';
import { create } from 'react-native-extended-stylesheet';

export interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
};

export const loginUser = createAsyncThunk('auth/login', async (email: string) => {
    const demoToken = 'demo-jwt-token-12345';
    await secureStorage.saveToken(demoToken);

    return {
        id: '1',
        name: 'Anastasia',
        email,
    } as User;
},
);


export const logoutUser = createAsyncThunk('aytj/logout', async () => {
    await secureStorage.removeToken();
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            });
    },
});

export default authSlice.reducer;