import {configureStore} from "@reduxjs/toolkit";
import globalStore from "@/store/redusers/globalStore";


const store = configureStore(
    {
        reducer: {
            global: globalStore.reducer
        }
    }
);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;