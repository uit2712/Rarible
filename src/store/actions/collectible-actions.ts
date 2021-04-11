import { IAction } from '../../common/interfaces';
import { ECategoryType } from '../../enums/collectible-enums';

export const SET_SELECTED_CATE_TYPE = 'SET_SELECTED_CATE_TYPE';
export function setSelectedCateType(type: ECategoryType): IAction<ECategoryType> {
    return {
        type: SET_SELECTED_CATE_TYPE,
        payload: type,
    }
}