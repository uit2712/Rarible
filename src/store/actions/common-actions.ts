import { IAction } from "../../common/interfaces";

export const SET_IS_LOADING = 'SET_IS_LOADING';
export function setIsLoadingAction(isLoading: boolean): IAction<boolean> {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    }
}