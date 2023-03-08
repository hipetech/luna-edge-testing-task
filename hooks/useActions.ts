import {bindActionCreators} from "redux";
import {useAppDispatch} from "./useAppDispatch";
import globalStore from "@/store/redusers/globalStore";

const actions = {
    ...globalStore.actions
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useActions = (): any => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions, dispatch);
};