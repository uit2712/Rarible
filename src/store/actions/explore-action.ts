import { IAction } from "../../common/interfaces";

export const SET_SELECTED_CATE_ID = 'SET_SELECTED_CATE_ID';
export function setSelectedCateId(cateId: number): IAction<number> {
    return {
        type: SET_SELECTED_CATE_ID,
        payload: cateId,
    }
}

export const SET_LIST_TOP_TRADERS = 'SET_LIST_TOP_TRADERS';
export const setListTopTraders = (list: ITrader[]): IAction<ITrader[]> => ({
    type: SET_LIST_TOP_TRADERS,
    payload: list,
})