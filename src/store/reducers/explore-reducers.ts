import { Action, Reducer } from "redux";
import { IAction } from "../../common/interfaces";
import { SET_SELECTED_CATE_ID } from "../actions/explore-action";

export interface IExploreState {
    selectedCateId: number;
}

let initialState: IExploreState = {
    selectedCateId: 0,
}

export const reducer: Reducer<IExploreState> = (state = initialState, action: Action): IExploreState => {
    switch (action.type) {
        case SET_SELECTED_CATE_ID:
            const selectedCateId = (action as IAction<number>).payload as number;
            return {
                ...state,
                selectedCateId,
            }
        default: return state;
    }
}