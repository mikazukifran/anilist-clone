import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoggedProps {
    isUsingDarkMode: boolean;
}

const initialState: LoggedProps = {
    isUsingDarkMode: false,
};

export const accountSlice = createSlice({
    name: "preferences",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isUsingDarkMode = action.payload;
        },
    },
});

export const { setDarkMode } = accountSlice.actions;
