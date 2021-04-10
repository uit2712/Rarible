import { IAction } from "../../common/interfaces";

export const SET_SELECTED_CATE_ID = 'SET_SELECTED_CATE_ID';
export function setSelectedCateId(cateId: number): IAction<number> {
    return {
        type: SET_SELECTED_CATE_ID,
        payload: cateId,
    }
}