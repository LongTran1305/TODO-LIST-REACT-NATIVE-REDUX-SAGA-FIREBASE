import {SET_LOADING, SET_LOADING_POPUP} from "../../constant/actionTypes";

const INITIAL_STATE = {
    isLoading: false,
    isLoadingPopup: true,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state.isLoading,
                isLoading: action.payload.isLoading,
            }
        case SET_LOADING_POPUP:
            return {
                ...state.isLoadingPopup,
                isLoadingPopup: action.payload.isLoadingPopup,
            }
        default:
            return state;
    }
};