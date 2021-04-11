import { Reducer, Action } from 'redux'
import { IAction } from '../../common/interfaces';
import { ECategoryType } from '../../enums/collectible-enums';
import { SET_SELECTED_CATE_TYPE } from '../actions/collectible-actions';

export interface ICollectibleState {
    selectedCateType: ECategoryType;
}

let initialState: ICollectibleState = {
    selectedCateType: ECategoryType.onSale,
}

export const reducer: Reducer<ICollectibleState> = (state = initialState, action: Action): ICollectibleState => {
    switch(action.type) {
        default: return state;
        case SET_SELECTED_CATE_TYPE:
            return {
                ...state,
                selectedCateType: (action as IAction<ECategoryType>).payload as ECategoryType,
            }
    }
}