import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GlobalStore {
    searchingValue: string;
    isOpenFavouriteDialog: boolean;
}

const initialState: GlobalStore = {
    searchingValue: "",
    isOpenFavouriteDialog: false
};

const globalStore = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSearchingValue: (state: GlobalStore, action: PayloadAction<string>) => {
            state.searchingValue = action.payload;
        },
        setIsOpenFavouriteDialog: (state: GlobalStore, action: PayloadAction<boolean>) => {
            state.isOpenFavouriteDialog = action.payload;
        }
    }
});

export default globalStore;