import { Action, Reducer } from "redux";
//import { getArrayValue } from "../../common/functions";
import { IAction } from "../../common/interfaces";
import { ITrader } from "../../interfaces/explore-interfaces";
import { SET_LIST_TOP_TRADERS, SET_SELECTED_CATE_ID } from "../actions/explore-action";

export interface IExploreState {
    selectedCateId: number;
    listTopTraders?: ITrader[];
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
        case SET_LIST_TOP_TRADERS:
            return {
                ...state,
                listTopTraders: ((action as IAction<ITrader[]>).payload),
            }
        default: return state;
    }
}