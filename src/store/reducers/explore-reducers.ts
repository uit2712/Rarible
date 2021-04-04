import { Action, Reducer } from "redux";
import { IAction } from "../../common/interfaces";
import { ICategoryItem } from "../../interfaces/explore-interfaces";
import { FETCH_EXPLORE_CATEGORY } from "../actions/explore-action";

export interface IExploreState {
    listExploreCategory?: ICategoryItem[];
}

let initialState: IExploreState = {
    listExploreCategory: [],
}

export const reducer: Reducer<IExploreState> = (state = initialState, action: Action): IExploreState => {
    switch (action.type) {
        case FETCH_EXPLORE_CATEGORY:
            return {
                ...state,
                listExploreCategory: (action as IAction<ICategoryItem[]>).payload,
            }
        default: return state;
    }
}