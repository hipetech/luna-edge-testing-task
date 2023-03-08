import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GlobalStore {
    searchingValue: string;
}

const initialState: GlobalStore = {
    searchingValue: ""
};

const globalStore = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSearchingValue: (state: GlobalStore, action: PayloadAction<string>) => {
            state.searchingValue = action.payload;
        }
    }
});

export default globalStore;