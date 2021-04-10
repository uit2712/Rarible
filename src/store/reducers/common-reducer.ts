import { Reducer, Action } from 'redux'
import { IAction } from '../../common/interfaces';
import { SET_IS_LOADING } from '../actions/common-actions';

export interface ICommonState {
    isLoading: boolean;
}

let initialState: ICommonState = {
    isLoading: false,
}

export const reducer: Reducer<ICommonState> = (state = initialState, action: Action): ICommonState => {
    switch(action.type) {
        default: return state;
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: (action as IAction<boolean>).payload as boolean,
            }
    }
}