import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GlobalStore {
    isSearching: boolean;
}


const initialState: GlobalStore = {
    isSearching: false
};

const globalStore = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleIsSearching: (state: GlobalStore, action: PayloadAction<boolean>) => {
            state.isSearching = action.payload;
        }
    }
});

export default globalStore;