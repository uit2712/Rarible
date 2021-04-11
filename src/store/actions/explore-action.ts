import { IAction } from "../../common/interfaces";
import { EFilterType } from "../../enums/explore-enums";

export const SET_SELECTED_CATE_ID = 'SET_SELECTED_CATE_ID';
export function setSelectedCateId(cateId: number): IAction<number> {
    return {
        type: SET_SELECTED_CATE_ID,
        payload: cateId,
    }
}

export const SET_SELECTED_FILTER_TYPE = 'SET_SELECTED_FILTER_TYPE';
export function setSelectedFilterType(type: EFilterType): IAction<EFilterType> {
    return {
        type: SET_SELECTED_FILTER_TYPE,
        payload: type,
    }
}