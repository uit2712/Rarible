import { Action, Reducer } from 'redux';
import { IAction } from '../../common/interfaces';
import { EFilterType } from '../../enums/explore-enums';
import { SET_SELECTED_CATE_ID, SET_SELECTED_FILTER_TYPE } from '../actions/explore-action';

export interface IExploreState {
    selectedCateId: number;
    selectedFilterType: EFilterType;
}

let initialState: IExploreState = {
    selectedCateId: 0,
    selectedFilterType: EFilterType.recentlyAdded,
}

export const reducer: Reducer<IExploreState> = (state = initialState, action: Action): IExploreState => {
    switch (action.type) {
        case SET_SELECTED_CATE_ID:
            const selectedCateId = (action as IAction<number>).payload as number;
            return {
                ...state,
                selectedCateId,
            }
        case SET_SELECTED_FILTER_TYPE:
            const selectedFilterType = (action as IAction<EFilterType>).payload as EFilterType;
            return {
                ...state,
                selectedFilterType,
            }
        default: return state;
    }
}