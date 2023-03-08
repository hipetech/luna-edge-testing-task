import {bindActionCreators} from "redux";
import {useAppDispatch} from "./useAppDispatch";
import globalStore from "@/store/redusers/globalStore";

const actions = {
    ...globalStore.actions
};

export const useActions = (): unknown => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions, dispatch);
};