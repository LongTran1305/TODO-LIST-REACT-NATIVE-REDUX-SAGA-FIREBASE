import {SET_LOADING, SET_LOADING_POPUP} from "../../constant/actionTypes";

export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        payload: isLoading,
    }
}
export const setLoadingPopup = (isLoadingPopup) => {
    return {
        type: SET_LOADING_POPUP,
        payload: isLoadingPopup
    }
}
